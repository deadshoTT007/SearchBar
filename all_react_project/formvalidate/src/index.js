import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import {createStore,applyMiddleware,compose,combineReducers} from 'redux'
import {BrowserRouter as Router} from 'react-router-dom'
import {formReducer} from './formReducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(formReducer,composeEnhancers(applyMiddleware(thunk)));


// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
