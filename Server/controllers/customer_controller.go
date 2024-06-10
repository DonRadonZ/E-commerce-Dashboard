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

var customerCollection *mongo.Collection = configs.GetCollection(configs.DB, "customers")
var customervalidate = validator.New()



func GetACustomer(c *fiber.Ctx) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	customerId := c.Params("customerId")

	var customer models.Customer
	defer cancel()

	objId, _ := primitive.ObjectIDFromHex(customerId)

	err := customerCollection.FindOne(ctx, bson.M{"id": objId}).Decode(&customer)

	if err != nil {
		c.Status(http.StatusInternalServerError).JSON(responses.Response{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data":err.Error()}})
		return
	}
	 c.Status(http.StatusOK).JSON(responses.Response{Status: http.StatusOK, Message: "success", Data: &fiber.Map{"data": customer}})
}

func EditACustomer (c*fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	customerId := c.Params("customerId")
	var customer models.Customer
	defer cancel()
	objId, _ := primitive.ObjectIDFromHex(customerId)

	if err := c.BodyParser(&customer); err!= nil {
		return c.Status(http.StatusBadRequest).JSON(responses.Response{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	if validationErr := customervalidate.Struct(&customer); validationErr != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.Response{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": validationErr.Error()}})
	}

	update := bson.M{
	"Name": customer.Name,
	"Email": customer.Email,
	"Phone": customer.Phone,
	"Purchase_Amount": customer.Purchase_amount,
}
	result, err := customerCollection.UpdateOne(ctx, bson.M{"id": objId},bson.M{"$set": update})

	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(
			responses.Response{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}},
		)
	}

	var updatedCustomer models.Customer
	if result.MatchedCount == 1 {
		err := customerCollection.FindOne(ctx, bson.M{"id": objId}).Decode(&updatedCustomer)

		if err != nil {
			return c.Status(http.StatusInternalServerError).JSON(responses.Response{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
		}
	}

	return c.Status(http.StatusOK).JSON(responses.Response{Status: http.StatusOK, Message: "success", Data: &fiber.Map{"data": updatedCustomer}})
	
}



func DeleteACustomer(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	customerId := c.Params("customerId")
	defer cancel()

	objId, _ := primitive.ObjectIDFromHex(customerId)

	result, err := customerCollection.DeleteOne(ctx, bson.M{"id": objId})

	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.Response{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	if result.DeletedCount < 1 {
		return c.Status(http.StatusNotFound).JSON(responses.Response{Status: http.StatusNotFound, Message: "error", Data: &fiber.Map{"data": "Customer with specified ID not found!"}},
		) 
	}
	
	return c.Status(http.StatusOK).JSON(
		responses.Response{Status: http.StatusOK, Message: "success", Data: &fiber.Map{"data": "Inventory Item successfully deleted!"}},
	)
}

func GetAllCustomer(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var customers []models.Customer
	defer cancel()

	results, err := customerCollection.Find(ctx, bson.M{})

	if err != nil {
		return c.Status(http.StatusNotFound).JSON(responses.Response{Status: http.StatusNotFound, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	//reading from the db in an optimal way
	defer results.Close(ctx)

	for results.Next(ctx) {
		var singleCustomer models.Customer
		if err = results.Decode(&singleCustomer); err != nil {
			return c.Status(http.StatusNotFound).JSON(responses.Response{Status: http.StatusNotFound, Message: "error", Data: &fiber.Map{"data": err.Error()}})
		}

		customers = append(customers, singleCustomer)
	}
		return c.Status(http.StatusOK).JSON(customers)	
}