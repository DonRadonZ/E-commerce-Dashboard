import { useParams } from "react-router-dom"

import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "../../service/apiCustomer";

function useCustomers() {
    
    const {CustomerId} = useParams();

    const {
        isPending,
        data,
        error
    } = useQuery({
        queryKey: ["customer", CustomerId],
        queryFn: () => getCustomers(),
        retry: false,
    })

    return {isPending, data, error}
}

export default useCustomers
