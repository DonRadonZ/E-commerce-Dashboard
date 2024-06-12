import styled from "styled-components"
import Table from "../../Components/UI/Table/Table";
import Modal from "../../Components/UI/Modal";
import Menus from "../../Components/UI/Menus";
import { HiPencil } from "react-icons/hi2";


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

const Instock = styled.div`
  font-family: "Sarabun";
  font-weight: 600;
  color: green;
  
`;

const Lowstock = styled.div`
  font-family: "Sarabun";
  font-weight: 600;
  color: orange;
  
`;

const OutofStock = styled.div`
  font-family: "Sarabun";
  font-weight: 600;
  color: red;
  
`;

// const Status = 

export interface ICustomer  {
  inventory : {
    inventory_id: string,
    inventory_name: string;
  category: string;
  remainder: number;
}
}

export default function InventoryRow({inventory}: ICustomer) {

  const {
    inventory_id,
    inventory_name,
    category,
    remainder,
    
  } = inventory

  // const statusToTagName: any = {
  //   instock: "blue",
  //   lowstock: "green",
  //   outofstock: "red"
  // }

  return (
    <Table.Row>
        <Inventory>{inventory_name}</Inventory>
        <Category>{category}</Category>
        { remainder ?
        <Amount>{remainder}</Amount> : <Amount>0</Amount>
  
        }
        {remainder > 9 ? <Instock>In Stock </Instock>: remainder > 0 && remainder <= 5 ? <Lowstock>Low Stock</Lowstock>: <OutofStock>Out of Stock</OutofStock>}
        <div>
       <Modal>
          <Menus.Menu>
            <Menus.Menu>
              <Menus.Toggle id={inventory_id}/>
                <Menus.List id={inventory_id}>
                  <Menus.Button
                  icon={<HiPencil />}
                  >
                    Edit
                  </Menus.Button>
                </Menus.List>
            
            </Menus.Menu>
          </Menus.Menu>
       </Modal>
      </div>
    </Table.Row>
  )
}
