

import Heading from '../Components/layout/Header/Heading'
import Row from '../Components/layout/Row'
import InventoryTable from '../feature/Inventory/InventoryTable';
import InventoryTableOperation from '../feature/Inventory/InventoryTableOperation';

export default function Inventory() {
  return (
    <>
    <Row type="horizontal">
        <Heading as="h1">All Inventory</Heading>
        <InventoryTableOperation/>
    </Row>
    <Row>
      <InventoryTable/>
    </Row>
    </>
  )
}
