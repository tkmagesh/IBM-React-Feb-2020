let currentProductId = 0;
export function addNew(productName, category){
    console.log(arguments);
    const newProduct = {
        id :++currentProductId,
        name : productName,
        category : category,
        isOutOfStock : false
    };
    let action = { type: 'ADD_NEW_PRODUCT', payload: newProduct };
    return action;
}