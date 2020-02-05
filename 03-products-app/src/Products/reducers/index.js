function productsReducer(currentState = [], action) {
    if (action.type === 'ADD_NEW') {
        return [...currentState, action.payload];
    }
    if (action.type === 'UPDATE'){
        const updatedProduct = action.payload;
        return currentState.map(product => product.id === updatedProduct.id ? updatedProduct : product );
    }
    if (action.type === 'REMOVE'){
        const productsToRemove = action.payload;
        const newState = currentState.filter(product => productsToRemove.indexOf(product) === -1);
        console.table(newState);
        return newState;
    }
    return currentState;
}

export default productsReducer;