import axios from 'axios';
const productsServiceEndPoint = 'http://localhost:3030/products';

export function getAll(){
    return axios
        .get(productsServiceEndPoint)
        .then(response => response.data);
}

export function save(productData){
    if (productData.id === 0){
        //new product
        return axios
            .post(productsServiceEndPoint, productData)
            .then(response => response.data);
    } else {
        //existing product
        return axios
            .put(`${productsServiceEndPoint}/${productData.id}`, productData)
            .then(response => response.data);
    }
}

export function remove(productData){
    return axios
        .delete(`${productsServiceEndPoint}/${productData.id}`)
        .then(response => response.data);
}