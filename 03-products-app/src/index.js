import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';

import Products from './Products';
import Categories from './Categories';
import appStore from './store';

import axios from 'axios';
window['axios'] = axios;

ReactDOM.render( 
    <Provider store={appStore}>
        <div>
            <Categories />
            <hr/>
            <Products />
        </div>
    </Provider>,
    document.getElementById('root'));

