export function removeOutOfStock(products){
    const productsToRemove = products.filter(product => product.isOutOfStock);
    const action = { type : 'REMOVE', payload : productsToRemove };
    return action;
}