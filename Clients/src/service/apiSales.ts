import axios from "axios";

const ENDPOINT = "http://localhost:3000";

export async function getSales(){
    const response = await axios.get(`${ENDPOINT}/sales`)
    const sales = response.data
    const count = sales.length

    return {sales, count}
  }