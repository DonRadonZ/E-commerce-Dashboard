import { useParams } from "react-router-dom"

import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "../../service/apiCustomer";

function useCustomers() {
    const {CustomerId} = useParams();

    const {
        isPending,
        data: customer,
        error
    } = useQuery({
        queryKey: ["customer", CustomerId],
        queryFn: () => getCustomers(CustomerId),
        retry: false,
    })

    return {isPending, customer, error}
}

export default useCustomers
