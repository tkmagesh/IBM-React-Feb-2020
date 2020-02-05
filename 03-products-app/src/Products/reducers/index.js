function productsReducer(currentState = [], action) {
    if (action.type === 'ADD_NEW') {
        return [...currentState, action.payload];
    }
    return currentState;
}

export default productsReducer;