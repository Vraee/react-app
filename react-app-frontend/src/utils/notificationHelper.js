import { setNotification, clearNotification } from '../reducers/notificationReducer';

import store from '../store';

export const dispatchNotificationWithTimeout = (msg, timeout) => {
    store.dispatch(setNotification(msg));
    setTimeout(() => {
        store.dispatch(clearNotification(msg));
    }, timeout);
}