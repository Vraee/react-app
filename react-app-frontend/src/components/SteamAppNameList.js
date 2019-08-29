import React from 'react'
import { connect } from 'react-redux'

import { displayChange } from '../reducers/displayStateReducer';
import { selectApp } from '../reducers/steamAppReducer';

import { states } from '../utils/displayStateHelper';

const SteamAppNameList = (props) => {
    return(
        props.shortApps
            .sort((a, b) => a.name.localeCompare(b.name))
            .map( a =>
                <SteamAppName 
                    key={ a.appid } 
                    app={ a }
                    onClick={ () => props.selectApp(a.appid).then(() => props.displayChange(states.details)) }
                />
            )
    );
};

const SteamAppName = ({ app, onClick }) => {
    return(
        <div className='nameListItem' onClick={ onClick }>
            <h3>{ app.name }</h3>
            <p>{ `SteamID: ${ app.appid }` }</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        shortApps: state.shortApps
    };
};

const mapDispatchToProps = {
    selectApp, displayChange
};

export default connect(mapStateToProps, mapDispatchToProps)(SteamAppNameList);