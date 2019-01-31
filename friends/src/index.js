import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { friendsReducer } from "./reducers/friendsReducer";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const enhancer = compose(applyMiddleware(thunk, logger));

const store = createStore(friendsReducer, enhancer);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );


