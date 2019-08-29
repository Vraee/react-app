import React from 'react'
import { connect } from 'react-redux'

import SteamAppSummary from './SteamAppSummary';

import { displayChange } from '../reducers/displayStateReducer';
import { selectApp } from '../reducers/steamAppReducer';

import { states } from '../utils/displayStateHelper';


const SteamAppSummaryList = (props) => {
    return(
        props.detailedApps
            .filter(a => a !== undefined)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(a =>
                <SteamAppSummary 
                    key={ a.steam_appid }
                    app={ a }
                    className='summaryListItem'
                    onClick={ () => props.selectApp(a.steam_appid).then(() => props.displayChange(states.details)) }
                />
            )
    );
};

const mapStateToProps = (state) => {
    return {
        detailedApps: state.detailedApps
    };
};

const mapDispatchToProps = {
    selectApp, displayChange
};

export default connect(mapStateToProps, mapDispatchToProps)(SteamAppSummaryList);