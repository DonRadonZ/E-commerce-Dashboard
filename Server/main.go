package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"gitlab.com/supachai27102000/e-commerce-dashboard/configs"
	"gitlab.com/supachai27102000/e-commerce-dashboard/routes"
)

func main() {

	app := fiber.New()

	app.Use(cors.New())

	configs.ConnectDB()

	routes.UserRoutes(app)
	
	app.Get("/healthcheck", func(c *fiber.Ctx) error {
		return c.SendString("OK")
	})

	app.Listen("127.0.0.1:3000")
}