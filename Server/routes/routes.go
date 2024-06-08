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
	
}