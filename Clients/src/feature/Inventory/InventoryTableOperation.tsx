import TableOperations from "../../Components/UI/Table/TableOperations";
import Filter from "../../Components/utils/Filter";



export default function InventoryTableOperation() {
    return (
        <TableOperations>
            <Filter
                filterField="status"
                options={[
                    {value: "all",label: "All"},
                    { value: "instock", label: "In Stock" },
                    { value: "lowstock", label: "Low Stock" },
                    { value: "outofstock", label: "Out of Stock" }
                    
                ]}
            />
        </TableOperations>
    )
}
