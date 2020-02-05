import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, bindActionCreators } from 'redux';
import productsReducer from './Products/reducers';
import * as productActionCreators from './Products/actions';
import { Products, ProductsCount } from './Products';

var store = createStore(productsReducer);
var productActionDispatchers = bindActionCreators(productActionCreators, store.dispatch);

console.log(productActionDispatchers);

function renderApp() {
    const productNames = store.getState();
    ReactDOM.render(
        <div>
            <Products data={productNames} {...productActionDispatchers} />
            <hr />
            <ProductsCount data={productNames.length} />
        </div>,
        document.getElementById('root'))
}
store.subscribe(renderApp);
renderApp();

//import * as calculator from'./calculator';
//import { add } from './calculator';
//import calculator from './calculator';

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
