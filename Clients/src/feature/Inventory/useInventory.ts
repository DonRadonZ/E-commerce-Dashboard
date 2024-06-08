import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import { getInventories } from "../../service/apiInventory";

function useInventory() {
    const {InventoryId} = useParams();

    const {
        isLoading,
        data: inventory,
        error
    } = useQuery({
        queryKey: ["inventory", InventoryId],
        queryFn: () => getInventories(InventoryId),
        retry: false,
    });
    
    return {isLoading, error, inventory}
}

export default useInventory
