import Table from '../../Components/UI/Table/Table'
import Pagination from '../../Components/utils/Pagination'

import useInventory from '../../hooks/Inventories/useInventory';
import Spinner from '../../Components/UI/Spinner/Spinner';
import InventoryRow from './InventoryRow';


interface IInventoryProp {
  inventory_name: string;
  category: string;
  remainder: number;
  inventory_id: string;
}



export default function CustomerTable() {
  const {isPending, data, count} = useInventory();

  if(isPending) return <Spinner/>

  
  const inventories: IInventoryProp[] = data?.inventory || [];
  
  return (
    <Table columns="1.8fr 1.8fr 1.4fr 1.2fr 3.2rem">
        <Table.Header>
            <div>Name</div>
            <div>Category</div>
            <div>Amount</div>
            <div>Status</div>
            <div></div>
        </Table.Header>
        <Table.Body
          data={inventories}
          render = {(inventory) => <InventoryRow inventory={inventory} key={inventory.inventory_id}/>}
        />
        <Table.Footer>
            <Pagination count={count}/>
        </Table.Footer>
    </Table>
  )
}