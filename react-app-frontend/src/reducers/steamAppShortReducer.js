import steamAppService from '../services/steamApps';
import loader from '../utils/loader';

let allApps;

// Handles only names and ids rather than detailed data for each app
const steamAppShortReducer = (state = [], action) => {
    console.log('steamAppShortReducer')
    switch (action.type) {
        case 'INIT_APPS':
            allApps = action.data;
            return action.data;
        case 'FILTER_APPS':
            const filter = action.data.filter;
            return filter === '' ? allApps : allApps.filter(a => a.name.toLowerCase().indexOf(filter.toLowerCase()) > -1);
        default:
            return state;
    }
}

export const initialiseApps = (apps) => {
    console.log('initialiseApps')
    return async dispatch => {
        const apps = await loader.waitForLoad(steamAppService.getAll());
        dispatch({
            type: 'INIT_APPS',
            data: apps
        });
    };
};

export const filterApps = (filter) => {
    console.log('filterApps')
    return {
        type: 'FILTER_APPS',
        data: { filter }
    }
};

export default steamAppShortReducer;