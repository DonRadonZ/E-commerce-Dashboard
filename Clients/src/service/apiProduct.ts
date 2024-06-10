import axios from "axios";


const ENDPOINT = "http://localhost:3000";



export async function getProducts(){
  const products = await axios.get(`${ENDPOINT}/products`)
 .then(res => res.data)
 .catch(error => console.log(error))

  return {products}
}

console.log(getProducts())

export async function editProducts(){
    
}

export async function deleteProduct() {
    
}