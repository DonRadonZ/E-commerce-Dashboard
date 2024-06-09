import axios from "axios";

const ENDPOINT = "http://localhost:3000";

export async function getInventories(){
    const inventory = await axios.get(`${ENDPOINT}/inventories`)
    .then((res) => {console.log(res);},
    (error) => {
        console.log(error);
    });

    return {inventory}
}

export async function editInventories(InventoryId: string | undefined){
    const inventory = await axios.get(`${ENDPOINT}/inventories`)
    .then((res) => {console.log(res);},
    (error) => {
        console.log(error);
    });

    return {inventory}
}

export async function deleteInventories(InventoryId: string | undefined){
    const inventory = await axios.get(`${ENDPOINT}/inventories`)
    .then((res) => {console.log(res);},
    (error) => {
        console.log(error);
    });

    return {inventory}
}