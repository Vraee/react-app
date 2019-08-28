import React from 'react'
import { connect } from 'react-redux'

import SteamAppSummary from './SteamAppSummary';

import { selectApp } from '../reducers/steamAppReducer';

const SteamAppSummaryList = (props) => {
    if (props.detailedApps.length > 1) {
        return(
            props.detailedApps
                .filter(a => a !== undefined)
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(a =>
                    <SteamAppSummary 
                        key={ a.steam_appid }
                        app={ a }
                        className='summaryListItem'
                        onClick={ () => props.selectApp(a.steam_appid) }
                    />
                )
        );
    }
    return null;
};

const mapStateToProps = (state) => {
    return {
        detailedApps: state.detailedApps
    };
};

const mapDispatchToProps = {
    selectApp
};

export default connect(mapStateToProps, mapDispatchToProps)(SteamAppSummaryList);