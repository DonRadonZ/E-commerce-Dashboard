import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { getSales } from "../../service/apiSales";

function useSalesReports() {
    const queryCilent = useQueryClient();
    const [searchParams] = useSearchParams();
    const {SalesId} = useParams<{SalesId?: string}>();

    const {
        isPending,
        data,
        error
    } = useQuery({
        queryKey: ["sales", SalesId],
        queryFn: () => getSales()
    })
    console.log(data)
    return { isPending, data, error }
}


export default useSalesReports
