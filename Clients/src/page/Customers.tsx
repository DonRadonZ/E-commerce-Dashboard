import Row from '../Components/layout/Row';
import Heading from '../Components/layout/Header/Heading';
import CustomerTable from '../feature/Customer/CustomerTable';


export default function Customers() {
  
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Customers</Heading>
        
    </Row>
    <Row>
      <CustomerTable count={undefined}/>
    </Row>
    </>
  )
}
