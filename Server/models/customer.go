package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Customer struct {
	Id   primitive.ObjectID `json:"id,omitempty"`
	Name string `json:"name,omitempty"`
	RegisterDate string  `json:"registerdate,omitempty"`
	Email string `json:"email,omitempty"`
	Phone string `json:"phone,omitempty"`
}