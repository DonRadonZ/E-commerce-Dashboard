package models

import (
	

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Sales struct {
	Sales_Id    primitive.ObjectID `json:"sales_id,omitempty"`
	Buy_at string `json:"date,omitempty" valiadte:"required"`
	Product_Name  string             `json:"product_name,omitempty" valiadte:"required"`
	Amount  int32            `json:"amount,omitempty" valiadte:"required"`
	Price         float64            `json:"price,omitempty" valiadte:"required"`
	
	
}