import { combineReducers, createStore, applyMiddleware } from 'redux';

import productsReducer from '../Products/reducers';
import { categoriesReducer } from '../Categories';

const loggerMiddleware = 
    function(store){
        return function(next){
            return function(action){
                console.group(action.type);
                console.group('Before')
                console.log(store.getState());
                console.groupEnd();
                next(action);
                console.group('After')
                console.log(store.getState());
                console.groupEnd();
                console.groupEnd();
            }
        }
    }

const asyncMiddleware = store => next => action => {
    if (typeof action === 'function'){
        return action(store.dispatch, store.getState)
    } else {
        return next(action);
    }
}

const promiseMiddleware = store => next => action => {
    if (action instanceof Promise){
        action
            .then(actionToDispatch => next(actionToDispatch));
    } else {
        return next(action);
    }
}

const rootReducer = combineReducers({
    productsState: productsReducer,
    categoriesState: categoriesReducer
});

var store = createStore(rootReducer, applyMiddleware(loggerMiddleware, asyncMiddleware, promiseMiddleware));

export default store;