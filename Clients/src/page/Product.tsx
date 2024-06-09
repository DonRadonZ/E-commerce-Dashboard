import Heading from "../Components/layout/Header/Heading";
import Row from "../Components/layout/Row";
import ProductTable from "../feature/Products/ProductTable";


export default function Product() {
  return (
    <>
    <Row>
    <Heading as="h1">All Product</Heading>
    </Row>
    <Row>
   <ProductTable/>
   </Row>
   </>
  )
}
