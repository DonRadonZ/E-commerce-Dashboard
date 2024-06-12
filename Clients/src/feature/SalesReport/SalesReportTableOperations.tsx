import TableOperations from "../../Components/UI/Table/TableOperations";
import SearchFilter from "../../Components/utils/SearchFilter";
import SortBy from "../../Components/utils/SortBy";


export default function SalesReportTableOperations() {
  return (
    <TableOperations>
    <SearchFilter placeholder="Search..."/>
    <SortBy
       options={[
        {
          value: "recent-desc",
          label: "Sort by date (recent first)"
        },
        {
          value: "recent-asc",
          label: "Sort by date (older first)"
        },
        {
          value: "totalPrice-desc",
          label: "Sort by amount (high first)"
        },
        {
          value: "totalPrice-asc",
          label: "Sort by amount (low first)"
        },
       ]} 
    />
      </TableOperations>
  )
}
