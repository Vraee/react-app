import React from 'react'
import { connect } from 'react-redux'

import { selectApp } from '../reducers/steamAppReducer';

const SteamAppSummaryList = (props) => {
    if (props.detailedApps.length > 0) {
        return(
            props.detailedApps
                .filter(a => a !== undefined)
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(a =>
                    <SteamAppSummarized key={ a.steam_appid } app={ a } props={ props } />
                )
        );
    }
    return null;
};

const SteamAppSummarized = ({ app, props }) => {
    return(
        <div onClick={ () => props.selectApp(app.steam_appid) }>
            <h2>{ app.name }</h2>
            <p>{ `Type: ${ app.type !== undefined ? app.type : 'UNKNOWN' }` }</p>
            <p>{ `Publisher: ${ app.developers !== undefined ? app.developers[0] : 'UNKNOWN '}` }</p>
            <p>{ `Developer: ${ app.publishers !== undefined ? app.publishers[0] : 'UNKNOWN' }` }</p>
            <p>{ `Metacritic: ${ app.metacritic !== undefined ? app.metacritic.score : 'UNKNOWN' }` }</p>
            <p>{ app.short_description !== undefined ? app.short_description : null }</p>
        </div>
    );
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