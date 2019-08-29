const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.data;
        case 'CLEAR_NOTIFICATION':
            return null;
        default:
            return state;
    }
}

export const setNotification = msg => {
    return {
        type: 'SET_NOTIFICATION',
        data: msg
    };
};

export const clearNotification = () => {
    return {
        type: 'CLEAR_NOTIFICATION'
    };
};

export default notificationReducer;