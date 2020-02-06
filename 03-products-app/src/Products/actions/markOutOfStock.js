import * as productsApi from '../services/productsApi';

export function markOutOfStock(product){
    return function(dispatch){
        const markedOutOfStockProduct = { ...product, isOutOfStock : true };
        productsApi
            .save(markedOutOfStockProduct)
            .then(function(updatedProduct){
                const action = { type: 'UPDATE_PRODUCT', payload: updatedProduct };
                dispatch(action);
            });
    }
}