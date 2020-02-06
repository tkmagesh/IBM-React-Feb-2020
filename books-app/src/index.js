import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Books, { booksReducer } from './Books';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

const asyncMiddleware = ({dispatch, getState}) => next => action => {
    if (typeof action === 'function')
        return action(dispatch, getState);
    return next(action);
}

const appStore = createStore(booksReducer, applyMiddleware(asyncMiddleware));

ReactDOM.render(
    <Provider store={appStore}>
        <Books />
    </Provider>,
    document.getElementById('root')
)