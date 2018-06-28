import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import thunk from 'redux-thunk';
import {
    applyMiddleware,
    compose,
    combineReducers,
    createStore
} from 'redux';
import { Provider } from 'react-redux';

//const allReducers = combineReducers({ });

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
)

/*
const store = createStore(
    allReducers,
    beginning state,
    allStoreEnhancers
);
*/


ReactDOM.render(
    //<Provider store={store}>
        <App />
    //</Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();
