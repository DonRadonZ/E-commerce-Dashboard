import styled from "styled-components"
import Table from "../../Components/UI/Table/Table";

const Inventory = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-gray-600);
    font-family: "Sarabun";
`;

const Category = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sarabun";
`;

const Amount = styled.div`
  font-family: "Sarabun";
  font-weight: 600;
`;

// const Status = 

export interface ICustomer  {
  inventory : {
    inventory_name: string;
  category: string;
  remainder: number;
}
}

export default function InventoryRow({inventory}: ICustomer) {

  const {
    inventory_name,
    category,
    remainder
  } = inventory

  return (
    <Table.Row>
        <Inventory>{inventory_name}</Inventory>
        <Category>{category}</Category>
        <Amount>{remainder}</Amount>
    </Table.Row>
  )
}
