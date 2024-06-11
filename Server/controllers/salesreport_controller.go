package controllers

import (
	"context"
	"net/http"
	"time"

	"github.com/gofiber/fiber/v2"
	"gitlab.com/supachai27102000/e-commerce-dashboard/configs"
	"gitlab.com/supachai27102000/e-commerce-dashboard/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var salesCollection *mongo.Collection = configs.GetCollection(configs.DB,"sales")



func AddSales(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var sale models.Sales
	defer cancel()

	if err := c.BodyParser(&sale); err != nil {
		return c.Status(http.StatusBadRequest).JSON(&fiber.Map{"error": err.Error()})
	}

	newSales := models.Sales{
		Sales_Id: primitive.NewObjectID(),
		Buy_at: sale.Buy_at,
		Product_Name: sale.Product_Name,
		Amount: sale.Amount,
		Price: sale.Price,
		
	}

	result, err := salesCollection.InsertOne(ctx, newSales)

	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(&fiber.Map{"data": err.Error()})
	}

	return c.Status(http.StatusCreated).JSON(fiber.Map{"data": result})
}

func GetASales (c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	SalesId := c.Params("Sales_Id")
	var sale models.Sales
	defer cancel()

	objId, _ := primitive.ObjectIDFromHex(SalesId)

	err := productCollection.FindOne(ctx, bson.M{"id": objId}).Decode(&sale)

	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(fiber.Map{"data":err.Error()})
	}

	return c.Status(http.StatusOK).JSON(&fiber.Map{"data": sale})
}

func GetAllSales(c *fiber.Ctx) error{
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var sales []models.Sales
	defer cancel()

	results, err := salesCollection.Find(ctx, bson.M{})

	if err != nil {
		return c.Status(http.StatusNotFound).JSON(&fiber.Map{"data": err.Error()})
	}
	defer results.Close(ctx)
	for results.Next(ctx) {
		var singleSales models.Sales
		if err = results.Decode(&singleSales); err != nil {
			return c.Status(http.StatusNotFound).JSON(&fiber.Map{"data": err.Error()})
	}

	sales = append(sales, singleSales)
	}
	return c.Status(http.StatusOK).JSON(sales)
}