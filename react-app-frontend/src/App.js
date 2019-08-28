import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Notification from './components/Notification';
import SteamAppDetailed from './components/SteamAppDetailed';
import SteamAppFilter from './components/SteamAppFilter';
import SteamAppNameList from './components/SteamAppNameList';
import SteamAppSummaryList from './components/SteamAppSummaryList';

import { initialiseApps } from './reducers/steamAppShortReducer';

import './css/app.css';

const App = (props) => {
    useEffect(() => {
        props.initialiseApps();
    }, [props]);

    return (
        <div>
            <h1>Steam app finder</h1>
            <SteamAppFilter />
            <SteamAppSummaryList />
            <SteamAppDetailed />
            <SteamAppNameList />
        </div>
    );
}

export default connect(null, { initialiseApps })(App);
