import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { getSales } from "../../service/apiSales";
import { PAGE_SIZE } from "../../utils/constant";

function useSalesReports() {
    const queryCilent = useQueryClient();
    const [searchParams] = useSearchParams();
    const {SalesId} = useParams<{SalesId?: string}>();

    // PAGINATION
    const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

    const {
        isPending,
        data= {sales:[], count: 0},
        error
    } = useQuery({
        queryKey: ["sales", SalesId],
        queryFn: () => getSales()
    })
    

    const { count } = data;

    const pageCount = Math.ceil(count/ PAGE_SIZE);

    if (page < pageCount)
        queryCilent.prefetchQuery({
            queryKey: ["inventory", page+1],
            queryFn: () => getSales(),
    })

    if (page > 1)
        queryCilent.prefetchQuery({
            queryKey: ["inventory", page + 1],
            queryFn: () => getSales(),
    })

    return { isPending, data, error, count }
}


export default useSalesReports
