export function removeOutOfStock(products){
    const productsToRemove = products.filter(product => product.isOutOfStock);
    const action = { type : 'REMOVE_PRODUCT', payload : productsToRemove };
    return action;
}