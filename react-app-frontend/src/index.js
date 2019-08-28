import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import App from './App';

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
