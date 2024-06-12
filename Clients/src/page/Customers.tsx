import Row from '../Components/layout/Row';
import Heading from '../Components/layout/Header/Heading';
import CustomerTable from '../feature/Customer/CustomerTable';
import Input from '../Components/Form/Input';


export default function Customers() {
  
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Customers</Heading>
        <Input placeholder='search...'/>
    </Row>
    <Row>
      <CustomerTable/>
    </Row>
    </>
  )
}
