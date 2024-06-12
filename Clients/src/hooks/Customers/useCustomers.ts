import { useSearchParams } from "react-router-dom"

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCustomers } from "../../service/apiCustomer";
import { PAGE_SIZE } from "../../utils/constant";

function useCustomers() {
    const queryCilent = useQueryClient();
    const [searchParams] = useSearchParams();

    // PAGINATION
    const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
    
    

    const {
        isPending,
        data = {customer: [], count: 0},
        error
    } = useQuery({
        queryKey: ["customer", page],
        queryFn: () => getCustomers({ page, pageSize: PAGE_SIZE }),
        retry: false,
    })

    const {count} = data;

    const pageCount = Math.ceil(count/ PAGE_SIZE);

    if (page < pageCount)
        queryCilent.prefetchQuery({
            queryKey: ["inventory", page+1],
            queryFn: () => getCustomers({ page, pageSize: PAGE_SIZE }),
    })

    if (page > 1)
        queryCilent.prefetchQuery({
            queryKey: ["inventory", page + 1],
            queryFn: () => getCustomers({ page, pageSize: PAGE_SIZE }),
    })


    return {isPending, data, error, count}
}

export default useCustomers
