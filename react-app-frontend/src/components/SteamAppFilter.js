import React from 'react'
import { connect } from 'react-redux'

import { filterChange } from '../reducers/filterReducer';
import { filterApps } from '../reducers/steamAppShortReducer';
import { listAppData, clearList } from '../reducers/steamAppReducer';

const SteamAppFilter = (props) => {
    const onFilterChange = (event) => {
        // A hack to fix the issue where changes to filter don't affect the displayed
        // list of games before the next render (however, the problem persists 
        // if backspace is pressed)
        const tmpApps = props.shortApps.filter(a => a.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
        if (tmpApps.length > 0 && tmpApps.length <= 10) {
            props.listAppData(tmpApps.map(a => a.appid));
        } else {
            props.clearList();
        }
        props.filterApps(event.target.value);
        props.filterChange(event.target.value);

    };

    return(
        <div>
            Search <input value={ props.filter } onChange={ onFilterChange } /> 
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        filter: state.filter,
        shortApps: state.shortApps
    };
};

const mapDispatchToProps = {
    filterChange,
    filterApps,
    listAppData,
    clearList
};

export default connect(mapStateToProps, mapDispatchToProps)(SteamAppFilter);