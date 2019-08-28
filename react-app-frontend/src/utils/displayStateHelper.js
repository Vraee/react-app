import { displayChange } from '../reducers/displayStateReducer';
import { selectApp, listAppData, clearList } from '../reducers/steamAppReducer';

import store from '../store';

export const states = { none: 'NONE', names: 'NAME_LIST', oneSummary: 'ONE_SUMMARY', summaries: 'SUMMARY_LIST', details: 'APP_DETAILS' };

export const displayStateHelper = () => {
    const appNamesLength = store.getState().shortApps.length;

    if (appNamesLength > 0) {
        if (appNamesLength === 1) {
            dispactChange(states.oneSummary);
            store.dispatch(
                selectApp(store.getState().shortApps[0].appid)
            );
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
    }
};

const dispactChange = (state) => {
    store.dispatch(displayChange(state));
};