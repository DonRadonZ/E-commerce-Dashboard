import { useQuery, useQueryClient } from "@tanstack/react-query";
import {  useSearchParams } from "react-router-dom"
import { getInventories } from "../../service/apiInventory";
import { PAGE_SIZE } from "../../utils/constant";
// import { PAGE_SIZE } from "../../utils/constant";



function useInventory() {
    const queryCilent = useQueryClient();
    const [searchParams] = useSearchParams();

    // PAGINATION
    const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

    

    const {
        isPending,
        data = {count: 0, inventory: []},
        error
    } = useQuery({
        queryKey: ["inventory", page],
        queryFn: () => getInventories({ page, pageSize: PAGE_SIZE }),
    });
    
    const { count } = data;

    const pageCount = Math.ceil(count/ PAGE_SIZE);

    if (page < pageCount)
        queryCilent.prefetchQuery({
            queryKey: ["inventory", page+1],
            queryFn: () => getInventories({ page, pageSize: PAGE_SIZE }),
    })

    if (page > 1)
        queryCilent.prefetchQuery({
            queryKey: ["inventory", page + 1],
            queryFn: () => getInventories({ page, pageSize: PAGE_SIZE }),
    })


    return {isPending, error, data, count}
}

export default useInventory
