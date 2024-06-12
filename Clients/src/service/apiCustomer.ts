import axios from "axios";

const ENDPOINT = "http://localhost:3000";

export async function getCustomers(){
    const response = await axios.get(`${ENDPOINT}/customers`)
    const customer = response.data
    const count = customer.length

    return {customer, count}
}

export async function updateCustomer(){

}


export async function deleteCustomer(){

}
