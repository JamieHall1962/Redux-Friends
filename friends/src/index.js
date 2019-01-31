import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import persistState from 'redux-localstorage';
import { friendsReducer } from "./reducers";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const enhancer = compose(applyMiddleware(thunk, logger),persistState());

const store = createStore(friendsReducer, enhancer);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );


