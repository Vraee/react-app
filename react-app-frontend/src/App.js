import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import SteamAppFilter from './components/SteamAppFilter';
import SteamAppSummaryList from './components/SteamAppSummaryList';
import SteamAppNameList from './components/SteamAppNameList';
import SteamAppDetailed from './components/SteamAppDetailed';

import steamAppService from './services/steamApps';
import { initialiseApps } from './reducers/steamAppShortReducer';

const App = (props) => {
    useEffect(() => {
        props.initialiseApps();
    }, []);

    console.log('rendering...')
    return (
        <div>
            <SteamAppFilter />
            <SteamAppDetailed />
            <SteamAppNameList />
            <SteamAppSummaryList />
        </div>
    );
}

export default connect(null, { initialiseApps })(App);
