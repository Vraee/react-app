import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import displayStateReducer from './reducers/displayStateReducer';
import filterReducer from './reducers/filterReducer';
import notificationReducer from './reducers/notificationReducer';
import steamAppReducer from './reducers/steamAppReducer';
import steamAppShortReducer from './reducers/steamAppShortReducer';

const reducer = combineReducers({
    displayState: displayStateReducer,
    filter: filterReducer,
    notification: notificationReducer,
    detailedApps : steamAppReducer,
    shortApps: steamAppShortReducer
});

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default store;