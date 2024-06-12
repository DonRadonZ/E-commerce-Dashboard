import TableOperations from "../../Components/UI/Table/TableOperations";
import Filter from "../../Components/utils/Filter";
import SearchFilter from "../../Components/utils/SearchFilter";
import SortBy from "../../Components/utils/SortBy";

export default function CustomerTableOperations() {
    <TableOperations>
        <SearchFilter/>
        <Filter
            filterField="registeration_date"
            options={[
                { value: "all", label: "All" },
            ]}
        />
        <SortBy
            options={[
                {value: "registerDate-desc", label: "Sort by date (recent first)"},
            ]}
        />
    </TableOperations>
}