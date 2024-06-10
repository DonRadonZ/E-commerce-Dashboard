import styled from "styled-components";
import { formatCurrency } from "../../utils/helper";
import Table from "../../Components/UI/Table/Table";

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

const Amount = styled.div`
    font-family: "Sarabun";
    font-weight: 500;
`

const Circulation = styled.div`
    font-family: "Sarabun";
    font-weight: 500;
`

interface ProductProps {
    products: {
      id: string;
      product_photo: string;
      product_name: string;
      product_category: string;
      amount_sale: number;
      circulation: number;
    };
  }

export default function SalesReportRow({ products }: ProductProps) {

    const {
        // product_photo,
        product_name,
        product_category,
        amount_sale,
        circulation
    } = products

    

  return (
    <Table.Row>
        {/* <Img src={product_photo} alt={product_name}/> */}
        <Product>{product_name}</Product>
        <Category>{product_category}</Category>
        <Amount>{amount_sale}</Amount>
        <Circulation>{formatCurrency(circulation)}</Circulation>
        
    </Table.Row>
  )
}