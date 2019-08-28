import React from 'react';
import { connect } from 'react-redux';

import ImageGrid from './ImageGrid';
import SteamAppSummary from './SteamAppSummary';

import { clearList } from '../reducers/steamAppReducer';
import { displayStateHelper } from '../utils/displayStateHelper';

const SteamAppDetailed = (props) => {
    const app = props.detailedApps[0];

        let description = '';
        if (app !== undefined) {
            // Ugly and bad solution, but descriptions contain HTML tags. 
            // This is just a quick way to make them look decent. At
            // least at first glance.
            let tmpElement = document.createElement('div');
            tmpElement.innerHTML = app.about_the_game;
            description = tmpElement.textContent || tmpElement.innerText || '';
            tmpElement.remove();
        }

        const onClick = () => {
            props.clearList();
            displayStateHelper();
        }

        return(
            <div>
                <button onClick={ onClick }>
                    Back
                </button>
                { app !== undefined 
                    ?
                    <div>
                        <SteamAppSummary app={ app } />
                        <div id='steamAppDescription'>{ description }</div>
                        {app.screenshots !== undefined && app.screenshots.length > 0
                            ? <ImageGrid images={ app.screenshots } />
                            : null}
                    </div>
                    : 
                    <div className='notFound'>
                        <p>One match found<br />However, there's no detailed data available</p>
                    </div>
                }
            </div>
        );
};

const mapStateToProps = (state) => {
    return {
        detailedApps: state.detailedApps
    };
};

export default connect(mapStateToProps, { clearList })(SteamAppDetailed);