export function markOutOfStock(product){
    const markedOutOfStockProduct = { ...product, isOutOfStock : true };
    const action = { type : 'UPDATE', payload : markedOutOfStockProduct };
    return action;
}