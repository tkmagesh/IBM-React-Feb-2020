export function markOutOfStock(product){
    const markedOutOfStockProduct = { ...product, isOutOfStock : true };
    const action = { type : 'UPDATE_PRODUCT', payload : markedOutOfStockProduct };
    return action;
}