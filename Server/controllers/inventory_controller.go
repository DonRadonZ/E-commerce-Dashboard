package controllers

import (
	"context"
	"net/http"
	"time"

	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"gitlab.com/supachai27102000/e-commerce-dashboard/configs"
	"gitlab.com/supachai27102000/e-commerce-dashboard/models"
	"gitlab.com/supachai27102000/e-commerce-dashboard/responses"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var inventoryCollection *mongo.Collection = configs.GetCollection(configs.DB,"inventories")
var inventoryvalidate = validator.New()

func AddInventory(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var inventory models.Inventory
	defer cancel()

	if err := c.BodyParser(&inventory); err != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.Response{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	if validationErr := inventoryvalidate.Struct(&inventory); validationErr != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.Response{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": validationErr.Error()}})
	}

	newItem := models.Inventory{
		Id: primitive.NewObjectID(),
		Inventory_name: inventory.Inventory_name,
		Category: inventory.Category,
		Remainder: inventory.Remainder,
		Status: inventory.Status,
	}

	result, err := inventoryCollection.InsertOne(ctx, newItem)

	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.Response{Status: fiber.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	return c.Status(http.StatusCreated).JSON(responses.Response{Status: http.StatusCreated, Message: "success", Data: &fiber.Map{"data": result}})
}

func GetAInventory(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	inventoryId := c.Params("inventoryId")
	var inventory models.Inventory
	defer cancel()

	objId, _ := primitive.ObjectIDFromHex(inventoryId)

	err := inventoryCollection.FindOne(ctx, bson.M{"id": objId}).Decode(&inventory)
	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.Response{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data":err.Error()}})
	}

	return c.Status(http.StatusOK).JSON(responses.Response{Status: http.StatusOK, Message: "success", Data: &fiber.Map{"data": inventory}})
}

func EditAInventory(c * fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	inventoryId := c.Params("inventoryId")
	var inventory models.Inventory
	defer cancel()

	objId, _ := primitive.ObjectIDFromHex(inventoryId)

	if err := c.BodyParser(&inventory); err != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.Response{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	if validationErr := inventoryvalidate.Struct(&inventory); validationErr != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.Response{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": validationErr.Error()}})
	}

	update := bson.M{"Inventory_name": inventory.Inventory_name, "category": inventory.Category, "remainder": inventory.Remainder, "status": inventory.Status}

	result, err := inventoryCollection.UpdateOne(ctx, bson.M{"id": objId}, bson.M{"$set": update})

	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.Response{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}
	//get updated inventory details
	var updatedInventory models.Inventory
	if result.MatchedCount == 1 {
		err := inventoryCollection.FindOne(ctx, bson.M{"id": objId}).Decode(&updatedInventory)

		if err != nil {
			return c.Status(http.StatusInternalServerError).JSON(responses.Response{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
		}
	}

	return c.Status(http.StatusOK).JSON(responses.Response{Status: http.StatusOK, Message: "success", Data: &fiber.Map{"data": updatedInventory}})
}

func DeleteAInventory(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	inventoryId := c.Params("inventoryId")
	defer cancel()

	objId, _ := primitive.ObjectIDFromHex(inventoryId)

	result, err := inventoryCollection.DeleteOne(ctx, bson.M{"id": objId})

	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.Response{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	if result.DeletedCount < 1 {
		return c.Status(http.StatusNotFound).JSON(responses.Response{Status: http.StatusNotFound, Message: "error", Data: &fiber.Map{"data": "Inventory item with specified ID not found!"}},
		) 
	}
	
	return c.Status(http.StatusOK).JSON(
		responses.Response{Status: http.StatusOK, Message: "success", Data: &fiber.Map{"data": "Inventory Item successfully deleted!"}},
	)
}

func GetAllInventories(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var inventories []models.Inventory
	defer cancel()

	results, err := inventoryCollection.Find(ctx, bson.M{})

	if err != nil {
		return c.Status(http.StatusNotFound).JSON(responses.Response{Status: http.StatusNotFound, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	//reading from the db in an optimal way
	defer results.Close(ctx)
	for results.Next(ctx) {
		var singleInventory models.Inventory
		if err = results.Decode(&singleInventory); err != nil {
			return c.Status(http.StatusNotFound).JSON(responses.Response{Status: http.StatusNotFound, Message: "error", Data: &fiber.Map{"data": err.Error()}})
		}

		inventories = append(inventories, singleInventory)
	}
	return c.Status(http.StatusOK).JSON(
		responses.Response{Status: http.StatusOK, Message: "success", Data: &fiber.Map{"data": inventories}},
	)	
}

