package main

import (
	"fmt"
	

	"github.com/gofiber/fiber/v2"
)

func main() {
	fmt.Print("Hello world")

	server := fiber.New()
	
	server.Get("/healthcheck", func(c *fiber.Ctx) error {
		return c.SendString("OK")
	})

	server.Listen("127.0.0.1:3000")
}