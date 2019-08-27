import React from 'react'
import { connect } from 'react-redux'

const SteamAppNameList = (props) => {
    if (props.shortApps.length <= 50 && props.shortApps.lengt > 10) {
        return(
            props.shortApps.map( a =>
                <SteamAppName key={ a.appid } app={ a }/>
            )
        );
    }
    return null;
};

const SteamAppName = ({ app }) => {
    return(
        <div>
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

export default connect(mapStateToProps)(SteamAppNameList);