let currentProductId = 0;
export function addNew(productName){
    const newProduct = {
        id :++currentProductId,
        name : productName,
        isOutOfStock : false
    };
    let action = { type: 'ADD_NEW', payload: newProduct };
    return action;
}