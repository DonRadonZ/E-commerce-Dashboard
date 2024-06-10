import axios from "axios";

const ENDPOINT = "http://localhost:3000";

export async function getCustomers(){
    const customer = await axios.get(`${ENDPOINT}/customers`)
    .then((res) => res.data,
    (error) => {
        console.log(error);
    });

    return {customer}
}

export async function updateCustomer(){

}


export async function deleteCustomer(){

}
