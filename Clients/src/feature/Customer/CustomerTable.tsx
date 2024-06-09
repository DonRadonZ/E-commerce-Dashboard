
import Spinner from '../../Components/UI/Spinner/Spinner';
import Table from '../../Components/UI/Table/Table'
import Pagination from '../../Components/utils/Pagination'

import useCustomers from '../../hooks/Customers/useCustomers';

export default function CustomerTable({count}: {count: number}) {
  const {isPending, customer} = useCustomers();

  if(isPending) return <Spinner/>

  return (
    <Table columns="2.4fr 2.4fr 1.4fr 1.2fr 3.2rem">
        <Table.Header>
            <div>Registeration Date</div>
            <div>Name</div>
            <div>E-mail</div>
          <div>Total Buy</div>
          <div>Member</div>
        </Table.Header>

        <Table.Footer>
            <Pagination count={count}/>
        </Table.Footer>
    </Table>
  )
}
