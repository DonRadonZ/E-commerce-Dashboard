import axios from "axios";

const ENDPOINT = "http://localhost:3000";

export async function getCustomers(){
    const customers = await axios.get(`${ENDPOINT}/customers`)
    .then((res) => {console.log(res);},
    (error) => {
        console.log(error);
    });

    return {customers}
}

export async function updateCustomer(){

}


export async function deleteCustomer(){

}
