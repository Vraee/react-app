import { displayChange } from '../reducers/displayStateReducer';
import { listAppData, clearList } from '../reducers/steamAppReducer';

import store from '../store';

export const states = { none: 'NONE', names: 'NAME_LIST', summaries: 'SUMMARY_LIST', details: 'APP_DETAILS' };

export const displayStateHelper = () => {
    const appNamesLength = store.getState().shortApps.length;
    const appSummariesLength = store.getState().detailedApps.length;
    if (appNamesLength === 1 || appSummariesLength === 1) {
        dispactChange(states.details);
    } else if (appNamesLength <= 10) {
        store.dispatch(
            listAppData(store.getState().shortApps.map(a => a.appid))
        );
        dispactChange(states.summaries);
    } else if (appNamesLength <= 100) {
        store.dispatch(clearList());
        dispactChange(states.names);
    } else {
        dispactChange(states.none);
    }
};

const dispactChange = (state) => {
    store.dispatch(displayChange(state));
};