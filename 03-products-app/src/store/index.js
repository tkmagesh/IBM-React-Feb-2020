import { combineReducers, createStore } from 'redux';

import productsReducer from '../Products/reducers';
import { categoriesReducer } from '../Categories';

const rootReducer = combineReducers({
    productsState: productsReducer,
    categoriesState: categoriesReducer
});

var store = createStore(rootReducer);

export default store;