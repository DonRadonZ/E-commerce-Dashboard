import styled from "styled-components"
import Table from "../../Components/UI/Table/Table";
import { formatCurrency } from "../../utils/helper";


// const Img = styled.img`
//   display: block;
//   width: 6.4rem;
//   aspect-ratio: 3 / 2;
//   object-fit: cover;
//   object-position: center;
//   transform: scale(1.5) translateX(-7px);
// `;

const Product = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-gray-600);
    font-family: "Sarabun";
`;

const Category = styled.div`
    font-family: "Sarabun";
    font-weight: 500;
`

const Price = styled.div`
    font-family: "Sarabun";
    font-weight: 500;
`

const Discount = styled.div`
    font-family: "Sarabun";
    font-weight: 500;
`

interface ProductProps {
    products: {
      id: string;
      product_photo: string;
      product_name: string;
      product_category: string;
      price: number;
      discount: number;
    };
  }

export default function ProductRow({ products }: ProductProps) {

    const {
        // product_photo,
        product_name,
        product_category,
        price,
        discount
    } = products

    

  return (
    <Table.Row>
        {/* <Img src={product_photo} alt={product_name}/> */}
        <Product>{product_name}</Product>
        <Category>{product_category}</Category>
        <Price>{formatCurrency(price)}</Price>
        {discount ? (
      <Discount>{formatCurrency(discount)}</Discount>) : (
        <span>&mdash;</span>
        )}
    </Table.Row>
  )
}
