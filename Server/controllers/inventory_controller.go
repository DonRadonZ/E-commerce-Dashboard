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
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var inventoryCollection *mongo.Collection = configs.GetCollection(configs.DB,"inventory")
var validate = validator.New()

func AddInventory(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var inventory models.Inventory
	defer cancel()

	if err := c.BodyParser(&inventory); err != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.InventoryResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	if validationErr := validate.Struct(&inventory); validationErr != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.InventoryResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": validationErr.Error()}})
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
		return c.Status(http.StatusInternalServerError).JSON(responses.InventoryResponse{Status: fiber.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	return c.Status(http.StatusCreated).JSON(responses.InventoryResponse{Status: http.StatusCreated, Message: "success", Data: &fiber.Map{"data": result}})
}