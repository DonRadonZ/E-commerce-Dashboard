import Table from '../../Components/UI/Table/Table'
import Pagination from '../../Components/utils/Pagination'

import useInventory from '../../hooks/Inventories/useInventory';
import Spinner from '../../Components/UI/Spinner/Spinner';
import InventoryRow from './InventoryRow';


interface IInventoryProp {
  inventory_name: string;
  category: string;
  remainder: number;
  id: string;
}

export default function CustomerTable({count}) {
  const {isPending, data} = useInventory();

  if(isPending) return <Spinner/>

  console.log(data)

  const inventories: IInventoryProp[] = data?.inventory || [];
  
  return (
    <Table columns="1.8fr 1.8fr 1.4fr 1.2fr 3.2rem">
        <Table.Header>
            <div>Name</div>
            <div>Category</div>
            <div>Amount</div>
            <div>Status</div>
        </Table.Header>
        {inventories.map((inventory) => 
                (<InventoryRow inventory={inventory} key={inventory.id}/>)
                )}
        <Table.Footer>
            <Pagination count={count}/>
        </Table.Footer>
    </Table>
  )
}