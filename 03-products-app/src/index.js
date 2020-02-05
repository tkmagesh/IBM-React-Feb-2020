import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, bindActionCreators, combineReducers } from 'redux';
import productsReducer from './Products/reducers';

import Products from './Products';
import { Provider } from 'react-redux';

import  Categories , { categoriesReducer } from './Categories';

const rootReducer = combineReducers({
    productsState : productsReducer,
    categoriesState : categoriesReducer
});

var store = createStore(rootReducer);

ReactDOM.render( 
    <Provider store={store}>
        <div>
            <Categories />
            <hr/>
            <Products />
        </div>
    </Provider>,
    document.getElementById('root'));

