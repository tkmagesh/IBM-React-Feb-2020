import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, bindActionCreators, combineReducers } from 'redux';
import productsReducer from './Products/reducers';
import * as productActionCreators from './Products/actions';
import { Products, ProductsCount } from './Products';

import { categoriesReducer, categoryActionCreators, Categories } from './Categories';

const rootReducer = combineReducers({
    productsState : productsReducer,
    categoriesState : categoriesReducer
});

var store = createStore(rootReducer);

var categoryActionDispatchers = bindActionCreators(categoryActionCreators, store.dispatch);
var productActionDispatchers = bindActionCreators(productActionCreators, store.dispatch);

function renderApp(){
    const storeState = store.getState();
    const products = storeState.productsState;
    const categories = storeState.categoriesState;

    ReactDOM.render( 
        <div>
            <Categories data={categories} {...categoryActionDispatchers} />
            <hr/>
            <Products data={products} {...productActionDispatchers} />
            <hr />
            <ProductsCount data={products} />
        </div>,
        document.getElementById('root'));
}

renderApp();
store.subscribe(renderApp);

