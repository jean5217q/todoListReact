import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/main'
import RouterComponent from './router'
import 'element-theme-default';


const store = createStore(todoApp) ;


ReactDOM.render(
  <Provider store={store}>
    <RouterComponent/>
  </Provider>, 
  document.getElementById('root')
);