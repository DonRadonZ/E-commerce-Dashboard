package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Customer struct {
	Customer_Id   primitive.ObjectID `json:"customer_id,omitempty"`
	Name string `json:"name,omitempty"`
	Register_Date string  `json:"register_date,omitempty"`
	Email string `json:"email,omitempty"`
	Purchase_amount float64 `json:"purchase_amount,omitempty"`
	Phone string `json:"phone,omitempty"`
}