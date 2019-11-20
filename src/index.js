import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {Routes} from "./routing/Routes";
import configureStore from "./state";
const reduxStore = configureStore( window.REDUX_INITIAL_DATA );

ReactDOM.render(
    <Provider store={reduxStore}>
        <Routes/>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
