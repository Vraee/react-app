import steamAppService from '../services/steamApps';
import loader from '../utils/loader';

// Handles detailed app data
const steamAppReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_APP_LIST':
            return action.data;
        case 'CLEAR_LIST':
            return [];
        case 'SELECT_APP':
            return [action.data];
        default:
            return state;
    }
}

export const listAppData = (ids) => {
    console.log('listAppData')
    return async dispatch => {
        const apps = await loader.waitForLoad(steamAppService.getMultipleById(ids));
        dispatch({
            type: 'SET_APP_LIST',
            data: apps
        });
    };
};

export const clearList = () => {
    return {
        type: 'CLEAR_LIST'
    }
}

export const selectApp = (id) => {
    console.log('selectApp')
    return async dispatch => {
        const app = await loader.waitForLoad(steamAppService.getById(id));
        dispatch({
            type: 'SELECT_APP',
            data: app
        });
    };
};

export default steamAppReducer;