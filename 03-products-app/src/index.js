import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';

import Products from './Products';
import Categories from './Categories';
import appStore from './store';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const Home = () => (
    <>
        <h1>My App</h1>
        <hr/>
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Products?xyz=100">Products</Link>
                        </li>
                        <li>
                            <Link to="/Categories">Categories</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                {/* <Switch>
                    <Route path="/products">
                        <Products />
                    </Route>
                    <Route path="/categories">
                        <Categories />
                    </Route>
                </Switch> */}
                <Switch>
                    <Route path="/products" component={Products}>
                    </Route>
                    <Route path="/categories" component={Categories}>
                    </Route>
                </Switch>
            </div>
        </Router>
    </>
);

ReactDOM.render( 
    <Provider store={appStore}>
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));

