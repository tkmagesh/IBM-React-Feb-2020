import * as productsApi from '../services/productsApi';

export function addNew(productName, category){
    return function(dispatch){
        const newProductData = {
            id : 0,
            name : productName,
            category : category,
            isOutOfStock : false
        };
        productsApi
            .save(newProductData)
            .then(function(newProduct){
                let action = { type: 'ADD_NEW_PRODUCT', payload: newProduct };
                dispatch(action);
            });
    }
    
}