package database

import (
	"context"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

func ConnectDB() {
	connectionURI := "mongodb://127.0.0.1:27017"
	client,err := mongo.NewClient(options.Client())
}

