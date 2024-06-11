import styled from "styled-components";
import { formatCurrency } from "../../utils/helper";
import Table from "../../Components/UI/Table/Table";

const Product = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-gray-600);
    font-family: "Sarabun";
`;

const RegisterDate = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sarabun";
`;

const Amount = styled.div`
    font-family: "Sarabun";
    font-weight: 500;
    margin-left: 40px;
`

const Circulation = styled.div`
    font-family: "Sarabun";
    font-weight: 500;
`

interface SaleProps {
    sales: {
      id: string;
      date: string;
      product_name: string;
      amount: number;
      price: number;
    };
  }

export default function SalesReportRow({ sales }: SaleProps) {

    const {
        date,
        product_name,
        amount,
        price
    } = sales

    

  return (
    <Table.Row>
        <RegisterDate>{date}</RegisterDate>
        <Product>{product_name}</Product>
        <Amount>{amount}</Amount>
        <Circulation>{formatCurrency(price)}</Circulation>
        
    </Table.Row>
  )
}