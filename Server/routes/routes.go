package routes

import (
	"github.com/gofiber/fiber/v2"
	"gitlab.com/supachai27102000/e-commerce-dashboard/controllers"
)

func UserRoutes(app *fiber.App) {
	app.Post("/inventory", controllers.AddInventory)

	app.Get("/inventory/:inventoryId", controllers.GetAInventory)

	app.Patch("/inventory/:inventoryId", controllers.EditAInventory)

	app.Delete("/inventory/:inventoryId", controllers.DeleteAInventory)

	app.Get("/inventories", controllers.GetAllInventories)

	//customer part

	app.Patch("/customers/:customerId", controllers.EditACustomer)

	app.Delete("/customer/:customerId", controllers.DeleteACustomer)

	app.Get("/customers", controllers.GetAllCustomer)

	//product part
	app.Get("/products", controllers.GetAllProducts)

	app.Get("/product/:productId", controllers.GetAProduct)

	app.Post("/product", controllers.AddProduct)

	app.Patch("/product/:productId",controllers.UpdateAProduct)

	app.Delete("/product/:productId", controllers.DeleteAProduct)
}