import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Notification from './components/Notification';
import SteamAppDetailed from './components/SteamAppDetailed';
import SteamAppFilter from './components/SteamAppFilter';
import SteamAppNameList from './components/SteamAppNameList';
import SteamAppSummaryList from './components/SteamAppSummaryList';

import { initialiseApps } from './reducers/steamAppShortReducer';

import { states } from './utils/displayStateHelper';

import './css/app.css';

const App = (props) => {
    const initialiseApps = props.initialiseApps;

    useEffect(() => {
        initialiseApps();
    }, [initialiseApps]);

    return (
        <div>
            <h1>Steam app finder</h1>
            { props.notification !== null ? <Notification /> : null }
            { props.displayState === states.details ? <SteamAppDetailed /> : <SteamAppFilter /> }
            { props.displayState === states.summaries || props.displayState === states.oneSummary ? <SteamAppSummaryList /> : null }
            { props.displayState === states.names ? <SteamAppNameList /> : null }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        displayState: state.displayState,
        notification: state.notification
    };
};

export default connect(mapStateToProps, { initialiseApps })(App);
