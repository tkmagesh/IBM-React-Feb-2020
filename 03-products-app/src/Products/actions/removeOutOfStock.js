import * as productApi from '../services/productsApi';

export function removeOutOfStock(){
    return function(dispatch, getState){
        const storeState = getState();
        const products = storeState.productsState;
        const productsToRemove = products.filter(product => product.isOutOfStock);
        /* const allPromises = productsToRemove
            .map(productToRemove => productApi.remove(productToRemove))
        Promise.all(allPromises)
            .then( _ => {
                const action = { type: 'REMOVE_PRODUCTS', payload: productsToRemove };
                dispatch(action);
            }) */
        productsToRemove
            .forEach(productToRemove => {
                productApi
                    .remove(productToRemove)
                    .then(() => {
                        const action = { type: 'REMOVE_PRODUCT', payload: productToRemove };
                        dispatch(action);
                    })
            })
        
        
    }
}