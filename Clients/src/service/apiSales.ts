import axios from "axios";

const ENDPOINT = "http://localhost:3000";

export async function getSales(){
    const sales = await axios.get(`${ENDPOINT}/sales`)
   .then(res => res.data)
   .catch(error => console.log(error))
  
    return {sales}
  }