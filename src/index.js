import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import thunk from 'redux-thunk';
import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers
} from 'redux';
import { Provider } from 'react-redux';

import quizReducer from './reducers/quiz-reducer';

const allReducers = combineReducers({ 
    quiz: quizReducer
});

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
    allReducers,
    allStoreEnhancers
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
