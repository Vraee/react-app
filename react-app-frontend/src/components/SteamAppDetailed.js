import React from 'react';
import { connect } from 'react-redux';

import ImageGrid from './ImageGrid';
import SteamAppSummary from './SteamAppSummary';

const SteamAppDetailed = (props) => {
    const app = props.detailedApps[0];

    if (app !== undefined) {
        // Ugly and bad solution, but descriptions contain HTML tags. 
        // This is just a quick way to make them look decent. At
        // least at first glance.
        let description = '';
        let tmpElement = document.createElement('div');
        tmpElement.innerHTML = app.about_the_game;
        description = tmpElement.textContent || tmpElement.innerText || '';
        tmpElement.remove();

        return(
            <div>
                <SteamAppSummary app={ app } />
                <div id='steamAppDescription'>{ description }</div>
                { app.screenshots !== undefined && app.screenshots.length > 0
                    ? <ImageGrid images={ app.screenshots } />
                    : null
                }
            </div>
        );
    } else {
        return(
            <div className='notFound'>
                <p>One match found<br />However, there's no detailed data available</p>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        detailedApps: state.detailedApps
    };
};

export default connect(mapStateToProps)(SteamAppDetailed);