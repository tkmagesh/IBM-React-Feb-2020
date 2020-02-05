function productsReducer(currentState = [], action) {
    if (action.type === 'ADD_NEW_PRODUCT') {
        return [...currentState, action.payload];
    }
    if (action.type === 'UPDATE_PRODUCT'){
        const updatedProduct = action.payload;
        return currentState.map(product => product.id === updatedProduct.id ? updatedProduct : product );
    }
    if (action.type === 'REMOVE_PRODUCT'){
        const productsToRemove = action.payload;
        const newState = currentState.filter(product => productsToRemove.indexOf(product) === -1);
        console.table(newState);
        return newState;
    }
    if (action.type === 'INIT_PRODUCTS'){
        return action.payload;
    }
    return currentState;
}

export default productsReducer;