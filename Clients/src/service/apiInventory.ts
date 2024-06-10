import axios from "axios";

const ENDPOINT = "http://localhost:3000";

export async function getInventories(){
    const inventory = await axios.get(`${ENDPOINT}/inventories`)
    .then((res) => res.data,
    (error) => {
        console.log(error);
    });

    
    return {inventory}
}

export async function editInventories(){
    const inventory = await axios.patch(`${ENDPOINT}/inventories`)
    .then((res) => {console.log(res);},
    (error) => {
        console.log(error);
    });

    return {inventory}
}

export async function deleteInventories(){
    const inventory = await axios.delete(`${ENDPOINT}/inventories`)
    .then((res) => {console.log(res);},
    (error) => {
        console.log(error);
    });

    return {inventory}
}