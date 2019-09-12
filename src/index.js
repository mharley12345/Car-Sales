import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { myDamnLocalReducer } from './reducers/rootReducer';
import { carReducer } from './reducers/carReducer';
import { storeReducer } from './reducers/storeReducer';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(combineReducers({ car: carReducer, store: storeReducer, root: myDamnLocalReducer }));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  rootElement);