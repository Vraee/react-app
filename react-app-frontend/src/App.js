import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import SteamAppFilter from './components/SteamAppFilter';
import SteamAppSummaryList from './components/SteamAppSummaryList';
import SteamAppNameList from './components/SteamAppNameList';

import steamAppService from './services/steamApps';
import { initialiseApps } from './reducers/steamAppShortReducer';

const SteamApp = ({ app }) => {
    // Not a great solution, but descriptions contain HTML tags. 
    // This is just an easy way to make them look decent. 
    document.getElementById('description').innerHTML = app.about_the_game;
    return(
        <div>
            <h2>{ app.name }</h2>
            { app.screenshots !== undefined && app.screenshots.length > 0
                ? <img src={ app.screenshots[0].path_thumbnail } width='200' alt={ `screenshot of Steam app ${ app.name }` } />
                : null
            }

        </div>
    );
};

const App = (props) => {
    const [selectedApp, setSelectedApp] = useState(null);

    useEffect(() => {
        props.initialiseApps();
    }, []);

    const selectSteamApp = async (id) => {
        const app = await steamAppService.getById(440);
        setSelectedApp(app);
    };

    console.log('rendering...')
    return (
        <div>
            {/* <button onClick={ () => selectSteamApp(440) }>Click</button>
            <div>
            { selectedApp !== null
                ? <SteamApp app={ selectedApp } />
                : null
            }
            <p id='description'></p>
            </div> */}

            <SteamAppFilter />
            <SteamAppNameList />
            <SteamAppSummaryList />
        </div>
    );
}

export default connect(null, { initialiseApps })(App);
