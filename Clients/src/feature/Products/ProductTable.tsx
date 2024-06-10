import Table from '../../Components/UI/Table/Table'
import Spinner from '../../Components/UI/Spinner/Spinner';
import useProducts from '../../hooks/Products/useProducts';
import ProductRow from './ProductRow';


interface IProduct {
    id: string;
    product_photo: string;
    product_name: string;
    product_category: string;
    price: number;
    discount: number;
  }



export default function ProductTable() {
    const {isPending, data} = useProducts();

    if(isPending) return <Spinner/>
    

    const products: IProduct[] = data?.products || [];

    return (
        <Table columns="1.2fr 1.8fr 2.2fr 1fr 1fr ">
            <Table.Header>
                {/* <div></div> */}
                <div>Menu</div>
                <div>Category</div>
                <div>Price</div>
                <div>Discount</div>
                <div></div>
            </Table.Header>
            {/* <Table.Body
                data={products}
                render={(product) => {<ProductRow products={product} key={product.product_id}/>
            }}/> */}
            {products.map((product: IProduct) => 
                (<ProductRow products={product} key={product.id}/>)
                )}
            
        </Table>
    )
}
