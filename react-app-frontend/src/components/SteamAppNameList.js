import React from 'react'
import { connect } from 'react-redux'

import { selectApp } from '../reducers/steamAppReducer';

import { displayStateHelper } from '../utils/displayStateHelper';

const SteamAppNameList = (props) => {
    console.log(props.shortApps.length)
    if (props.shortApps.length <= 100 && props.shortApps.length > 10) {
        return(
            props.shortApps
                .sort((a, b) => a.name.localeCompare(b.name))
                .map( a =>
                    <SteamAppName 
                        key={ a.appid } 
                        app={ a } 
                        onClick={ () => props.selectApp(a.appid).then(() => displayStateHelper()) } />
                )
        );
    }
    return null;
};

const SteamAppName = ({ app, onClick }) => {
    return(
        <div className='nameListItem' onClick={ onClick }>
            <h3>{ app.name }</h3>
            <p>{ `SteamID ${ app.appid }` }</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        shortApps: state.shortApps
    };
};

const mapDispatchToProps = {
    selectApp
};

export default connect(mapStateToProps, mapDispatchToProps)(SteamAppNameList);