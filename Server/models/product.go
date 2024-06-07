package models

type Product struct{
	Photo string `json:"inventory_name,omitempty" valiadte:"required"`
}