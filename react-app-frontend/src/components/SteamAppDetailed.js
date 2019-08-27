import React from 'react';
import { connect } from 'react-redux';

import ImageGrid from './ImageGrid';

const SteamAppDetailed = (props) => {
    
    if (props.detailedApps.length === 1) {
        const app = props.detailedApps[0];
        // Not a great solution, but descriptions contain HTML tags. 
        // This is just an easy way to make them look decent.
        let descriptionDiv = document.createElement('div');
        descriptionDiv.setAttribute('id', 'description');
        document.body.appendChild(descriptionDiv);
        document.getElementById('description').innerHTML = app.about_the_game;
        return(
            <div>
                <h2>{ app.name }</h2>
                { app.screenshots !== undefined && app.screenshots.length > 0
                    ? <ImageGrid images={ app.screenshots } />
                    : null
                }

            </div>
        );
    }

    return null;
};

const mapStateToProps = (state) => {
    return {
        detailedApps: state.detailedApps
    };
};

export default connect(mapStateToProps)(SteamAppDetailed);