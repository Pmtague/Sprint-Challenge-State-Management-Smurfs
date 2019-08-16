import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import "./index.css";
import App from "./components/App";
import { smurfReducer } from './store/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(smurfReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById("root"));
