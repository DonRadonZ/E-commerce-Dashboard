import axios from "axios";

const ENDPOINT = "http://localhost:3000";

export async function getCustomers({ page = 1, pageSize= 10 }){
    const response = await axios.get(`${ENDPOINT}/customers?page=${page}&pageSize=$limit=${pageSize}`,{
        params: { page, pageSize }
    })
    const customer = response.data
    const count = customer.length

    return {customer, count}
}

export async function updateCustomer(){

}


export async function deleteCustomer(){

}
