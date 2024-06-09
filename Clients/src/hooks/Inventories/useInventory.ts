import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import { getInventories } from "../../service/apiInventory";

function useInventory() {
    const {InventoryId} = useParams();

    const {
        isPending,
        data: inventory,
        error
    } = useQuery({
        queryKey: ["inventories", InventoryId],
        queryFn: () => getInventories(InventoryId),
        retry: false,
    });
    
    return {isPending, error, inventory}
}

export default useInventory
