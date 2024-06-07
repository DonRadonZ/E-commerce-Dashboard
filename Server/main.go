package main

import (
	
	"github.com/gofiber/fiber/v2"
	"gitlab.com/supachai27102000/e-commerce-dashboard/configs"
	"gitlab.com/supachai27102000/e-commerce-dashboard/routes"
)

func main() {

	app := fiber.New()

	configs.ConnectDB()

	routes.UserRoutes(app)
	
	app.Get("/healthcheck", func(c *fiber.Ctx) error {
		return c.SendString("OK")
	})

	app.Listen("127.0.0.1:3000")
}