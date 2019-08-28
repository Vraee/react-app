import React from 'react'
import { connect } from 'react-redux'

import { filterChange } from '../reducers/filterReducer';
import { filterApps } from '../reducers/steamAppShortReducer';
import { listAppData, clearList } from '../reducers/steamAppReducer';

import {displayStateHelper} from '../utils/displayStateHelper';

const SteamAppFilter = (props) => {
    const onFilterChange = (event) => {
        props.filterApps(event.target.value);
        props.filterChange(event.target.value);
        displayStateHelper();
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