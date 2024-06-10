package controllers

import (
	"context"
	"fmt"
	"net/http"
	"time"

	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"gitlab.com/supachai27102000/e-commerce-dashboard/configs"
	"gitlab.com/supachai27102000/e-commerce-dashboard/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var productCollection *mongo.Collection = configs.GetCollection(configs.DB,"products")
var productvalidate = validator.New()

func AddProduct(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var product models.Product
	defer cancel()

	// parse the form data
	if err := c.BodyParser(&product); err != nil {
		return c.Status(http.StatusBadRequest).JSON(&fiber.Map{"error": err.Error()})
	}

	// Get the uploaded file from the form field "product_photo"

	file, err := c.FormFile("product_photo")
	if err != nil {
		return c.Status(http.StatusBadRequest).JSON(&fiber.Map{"error": "Failed to get photo from request"})
	}

	filePath := fmt.Sprintf("./uploads/%s", file.Filename)

	if err := c.SaveFile(file, filePath); err != nil {
		return c.Status(http.StatusInternalServerError).JSON(&fiber.Map{"error": "Failed to save photo"})
	}

	imageUrl := fmt.Sprintf("http://localhost:3000/images/%s", file.Filename)

	product.Product_Photo = filePath


	newProduct := models.Product{
		Product_Id: primitive.NewObjectID(),
		Product_Photo: imageUrl,
		Product_Category: product.Product_Category,
		Product_Name: product.Product_Name,
		Price: product.Price,
		Discount: product.Discount,
		Amount_Sale: product.Amount_Sale,
		Circulation: product.Circulation,

	}

	result, err := productCollection.InsertOne(ctx, newProduct)

	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(&fiber.Map{"data": err.Error()})
	}

	return c.Status(http.StatusCreated).JSON(fiber.Map{"data": result})
}

func GetAProduct(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	productId := c.Params("Product_Id")
	var product models.Product
	defer cancel()

	objId, _ := primitive.ObjectIDFromHex(productId)

	err := productCollection.FindOne(ctx, bson.M{"id": objId}).Decode(&product)

	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(fiber.Map{"data":err.Error()})
	}

	return c.Status(http.StatusOK).JSON(&fiber.Map{"data": product})
}

func UpdateAProduct(c * fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	productId := c.Params("productId")
	var product models.Product
	defer cancel()

	objId, _ := primitive.ObjectIDFromHex(productId)

	if err := c.BodyParser(&product); err != nil {
		return c.Status(http.StatusBadRequest).JSON(&fiber.Map{"data": err.Error()})
	}

	// Handle file upload
	file, err := c.FormFile("product_photo")
	if err == nil {
		// Save the file to a local directory (you can change this to your preferred location)
		filePath := fmt.Sprintf("./uploads/%s", file.Filename)
		if err := c.SaveFile(file, filePath); err != nil {
			return c.Status(http.StatusInternalServerError).JSON(&fiber.Map{"error": "Failed to save photo"})
		}
		// Update the product photo path
		product.Product_Photo = filePath
	}

	if validationErr := productvalidate.Struct(&product);
	validationErr != nil {
		return c.Status(http.StatusBadRequest).JSON(&fiber.Map{"data": validationErr.Error()})
	}

	update := bson.M{"Product_name": product.Product_Name, "Product_Photo": product.Product_Photo, "Product_Category": product.Product_Category, "Price": product.Price, "Discount": product.Discount, "Amount_Sale": product.Amount_Sale, "Circulation": product.Circulation}

	result, err := productCollection.UpdateOne(ctx, bson.M{"id": objId}, bson.M{"$set": update})

	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(&fiber.Map{"data": err.Error()})
	}

	var updatedProduct models.Product
	if result.MatchedCount == 1 {
		err := productCollection.FindOne(ctx, bson.M{"id": objId}).Decode(&updatedProduct)

		if err != nil {
			return c.Status(http.StatusInternalServerError).JSON(&fiber.Map{"data": err.Error()})
		}
	}

	return c.Status(http.StatusOK).JSON(&fiber.Map{"data": updatedProduct})
}

func DeleteAProduct(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	productId := c.Params("productId")
	defer cancel()

	objId, _ :=  primitive.ObjectIDFromHex(productId)

	result, err := productCollection.DeleteOne(ctx, bson.M{"id": objId})

	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(&fiber.Map{"data": err.Error()})
	}

	if result.DeletedCount < 1 {
		return c.Status(http.StatusNotFound).JSON(&fiber.Map{"data": "Image item with specified ID not found!"})
	}

	return c.Status(http.StatusOK).JSON(&fiber.Map{"data": "Product successfully deleted!"})
}

func GetAllProducts(c *fiber.Ctx) error{
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var products []models.Product
	defer cancel()

	results, err := productCollection.Find(ctx, bson.M{})

	if err != nil {
		return c.Status(http.StatusNotFound).JSON(&fiber.Map{"data": err.Error()})
	}
	defer results.Close(ctx)
	for results.Next(ctx) {
		var singleProduct models.Product
		if err = results.Decode(&singleProduct); err != nil {
			return c.Status(http.StatusNotFound).JSON(&fiber.Map{"data": err.Error()})
		}

		products = append(products, singleProduct)
	}
	return c.Status(http.StatusOK).JSON(products)
}