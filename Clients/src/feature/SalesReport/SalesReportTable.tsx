import Table from '../../Components/UI/Table/Table'
import Spinner from '../../Components/UI/Spinner/Spinner';
import useProducts from '../../hooks/Products/useProducts';
import SalesReportRow from './SalesReportRow';

interface IProduct {
  id: string;
  product_photo: string;
  product_name: string;
  product_category: string;
  amount_sale: number;
    circulation: number;
}


export default function SalesReportTable() {
  const {isPending, data} = useProducts();

    if(isPending) return <Spinner/>
    

    const products: IProduct[] = data?.products || [];

  return (
    <Table columns=" 2.4fr 2fr 1.2fr 1.4fr 1.2fr ">
        <Table.Header>
            {/* <div></div> */}
            <div>Menu</div>
            <div>Category</div>
            <div>Amount Sale</div>
            <div>Circulation</div>
        </Table.Header>
          {products.map((product: IProduct) => 
                (<SalesReportRow products={product} key={product.id}/>)
                )}
    </Table>
  )
}