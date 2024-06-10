import styled from 'styled-components';
import Table from '../../Components/UI/Table/Table';
import { formatCurrency } from '../../utils/helper';

const Customer = styled.div`
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

const Email = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sarabun";
`;

const Phone = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sarabun";
`;

const Amount = styled.div`
  font-family: "Sarabun";
  font-weight: 600;
`;

interface ICustomer {
    customers: {
    register_date: string,
    name: string,
    email: string,
    phone: string,
    purchase_amount: number
}
}

export default function CustomerRow({customers}: ICustomer) {

const  {
    register_date,
    name: customers_name,
    email,
    phone,
    purchase_amount
} = customers

  return (
    <Table.Row>
        <RegisterDate>{register_date}</RegisterDate>
        <Customer>{customers_name}</Customer>
        <Email>{email}</Email>
        <Phone>{phone}</Phone>
        <Amount>{formatCurrency(purchase_amount)}</Amount>
    </Table.Row>
  )
}
