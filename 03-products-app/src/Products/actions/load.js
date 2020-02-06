import * as productsApi from '../services/productsApi';

function getLocalData(){
    const data = [
        { "id": 1, "name": "Pen", "category": "stationary", "isOutOfStock": false },
        {
            "id": 2,
            "name": "Pencil",
            "category": "stationary",
            "isOutOfStock": false
        },
        {
            "id": 3,
            "name": "Rice",
            "category": "grocery",
            "isOutOfStock": false
        },
        {
            "id": 4,
            "name": "Pan",
            "category": "utencil",
            "isOutOfStock": false
        }
    ];
    return data;
}

 export function loadProducts(){
    return function(dispatch, getState){
        productsApi
            .getAll()
            .then(function(data){
                const action = { type: 'INIT_PRODUCTS', payload: data };        
                return dispatch(action);
            })
    }
} 
/* 
export function loadProducts() {
    return axios
        .get('http://localhost:3030/products')
        .then(response => response.data)
        .then(function (data) {
            const action = { type: 'INIT_PRODUCTS', payload: data };
            return action;
        });
} */
