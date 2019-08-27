import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import filterReducer from './reducers/filterReducer';
import steamAppShortReducer from './reducers/steamAppShortReducer';
import steamAppReducer from './reducers/steamAppReducer';

const reducer = combineReducers({
    filter: filterReducer,
    shortApps: steamAppShortReducer,
    detailedApps : steamAppReducer
});

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);
//console.log(store.getState());
//store.subscribe(() => console.log(store.getState()));

const renderApp = () => {
    ReactDOM.render(
        <Provider store={ store }>
            <App />
        </Provider>, 
        document.getElementById('root')
    );
};

renderApp();
store.subscribe(renderApp);
