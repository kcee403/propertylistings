import React from 'react';
import ReactDOM from 'react-dom';

import './css/app.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './store/reducers';

import thunk from 'redux-thunk';

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store = createStore(rootReducer, composeEnhancers(
     applyMiddleware(thunk)
 ));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
