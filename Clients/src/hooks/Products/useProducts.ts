import { useParams } from "react-router-dom"

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../service/apiProduct";

function useProducts() {
    const {ProductId} = useParams<{ProductId?: string}>();

    const {
        isPending,
        data,
        error
    } = useQuery({
        queryKey: ["products", ProductId],
        queryFn: () => getProducts()
    })
    console.log(data)
    return { isPending, data, error }
}

export default useProducts
