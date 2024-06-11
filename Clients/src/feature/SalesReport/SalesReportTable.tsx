import Table from '../../Components/UI/Table/Table'
import Spinner from '../../Components/UI/Spinner/Spinner';

import SalesReportRow from './SalesReportRow';
import Pagination from '../../Components/utils/Pagination';
import useSalesReports from '../../hooks/SalesReports/useSalesReports';


interface ISales {
  id: string;
  date: string;
  product_name: string;
  amount: number;
  price: number;
}




export default function SalesReportTable({count}) {
  const {isPending, data} = useSalesReports();

    if(isPending) return <Spinner/>
    

    const sales: ISales[] = data?.sales || [];

  return (
    <Table columns=" 2fr 2fr 2fr 1.4fr">
        <Table.Header>
            <div>Date</div>
            <div>Menu</div>
            <div>Amount Sale</div>
            <div>Price</div>
        </Table.Header>
          {sales.map((sale) => 
                (<SalesReportRow sales={sale} key={sale.id}/>)
                )}
        <Table.Footer>
            <Pagination count={count}/>
        </Table.Footer>  
    </Table>
  )
}