package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Inventory struct {
	Id primitive.ObjectID `json:"id,omitempty"`
	Inventory_name string `json:"inventory_name,omitempty" valiadte:"required"`
	Category string `json:"category,omitempty" valiadte:"required"`
	Remainder int64 `json:"remainder,omitempty" valiadte:"required"`	
}