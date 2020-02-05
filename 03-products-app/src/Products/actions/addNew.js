export function addNew(productName){
    let action = { type: 'ADD_NEW', payload: productName };
    return action;
}