import axios from "axios";


const ENDPOINT = "http://localhost:3000";

export async function getInventories({ page = 1, pageSize = 10 }){
    const response = await axios.get(`${ENDPOINT}/inventories`,{
        params: { page, pageSize }
      })  
    const inventory = response.data;
    const count = inventory.length;
    
    
    
    
    return {inventory, count};
    
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