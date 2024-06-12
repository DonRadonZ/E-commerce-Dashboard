import Spinner from '../../Components/UI/Spinner/Spinner';
import Table from '../../Components/UI/Table/Table'
import Pagination from '../../Components/utils/Pagination'

import useCustomers from '../../hooks/Customers/useCustomers';
import CustomerRow from './CustomerRow';

interface ICustomer {
  register_date: string,
  name: string,
  email: string,
  phone: string,
  purchase_amount: number
  customer_id: string;
}


export default function CustomerTable() {
  const {isPending, data, count} = useCustomers();

  if(isPending) return <Spinner/>

  console.log(data)
  const customers: ICustomer[] = data?.customer || [];

  return (
    <Table columns="1.2fr 1.2fr 1.8fr 1.2fr 1.2fr">
        <Table.Header>
            <div>Registeration Date</div>
            <div>Name</div>
            <div>E-mail</div>
          <div>Total Buy</div>
          <div>Member</div>
        </Table.Header>
        <Table.Body
        data={customers}
        render= {(customer) => 
          (<CustomerRow customers={customer} key={customer.customer_id}/>)}
        />
        <Table.Footer>
            <Pagination count={count}/>
        </Table.Footer>
    </Table>
  )
}
