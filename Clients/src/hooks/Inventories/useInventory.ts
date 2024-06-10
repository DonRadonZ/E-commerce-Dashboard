import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import { getInventories } from "../../service/apiInventory";

function useInventory() {
    const {InventoryId} = useParams();

    const {
        isPending,
        data,
        error
    } = useQuery({
        queryKey: ["inventory", InventoryId],
        queryFn: () => getInventories(),
        retry: false,
    });
    
    return {isPending, error, data}
}

export default useInventory
