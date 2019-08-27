import React from 'react'
import { connect } from 'react-redux'

const SteamAppSummaryList = (props) => {
    if (props.detailedApps.length > 0) {
        return(
            props.detailedApps
                .filter(a => a !== undefined)
                .map(a =>
                    <SteamAppSummarized key={ a.steam_appid } app={ a }/>
                )
        );
    }
    return null;
};

const SteamAppSummarized = ({ app }) => {
    return(
        <div>
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

export default connect(mapStateToProps)(SteamAppSummaryList);