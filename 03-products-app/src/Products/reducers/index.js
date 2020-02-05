function productsReducer(currentState = [], action) {
    if (action.type === 'ADD_NEW') {
        return [...currentState, action.payload];
    }
    if (action.type === 'UPDATE'){
        const updatedProduct = action.payload;
        return currentState.map(product => product.id === updatedProduct.id ? updatedProduct : product );
    }
    return currentState;
}

export default productsReducer;