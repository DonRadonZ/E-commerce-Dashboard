import axios from "axios";

const ENDPOINT = "http://localhost:3000";

export async function getInventories(InventoryId: string | undefined){
    const inventory = await axios.get(`${ENDPOINT}/inventories`)
    .then((res) => {console.log(res);},
    (error) => {
        console.log(error);
    });

    return {inventory}
}