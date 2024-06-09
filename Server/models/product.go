package models

type Product struct{
	Product_Photo string `json:"product_photo,omitempty" valiadte:"required"`
	Product_Name string `json:"product_name,omitempty" valiadte:"required"`
	Price float64 `json:"price,omitempty" valiadte:"required"`
	Discount float64 `json:"discount,omitempty" valiadte:"required"`
	Amount_Sale float64 `json:"amount_sale,omitempty" valiadte:"required"`
	Circulation float64 `json:"circulation,omitempty" valiadte:"required"`
}