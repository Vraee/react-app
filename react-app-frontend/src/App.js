import React, { useState, useEffect } from 'react';

import steamAppService from './services/steamApps';
import loader from './utils/loader';

const SteamAppNameList = ({ apps }) => {
    if (apps !== null) {
        return(
            apps.map( a =>
                <SteamAppListName key={ a.appid } app={ a }/>
            )
        );
    }

    return null;
};

const SteamAppListName = ({ app }) => {
    return(
        <div>
            <h3>{ app.name }</h3>
            <p><b>{ `SteamID ${ app.appid }` }</b></p>
        </div>
    );
};

const SteamAppSummaryList = ({ apps }) => {
    return(
        apps
            .filter(a => a !== undefined)
            .map(a =>
                <SteamAppSummarized key={ a.steam_appid } app={ a }/>
            )
    );
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

const SteamAppFilter = ({ filter, onFilterChange }) => {
    return(
        <div>
            Search <input value={ filter } onChange={ onFilterChange } /> 
        </div>
    );
};

const App = () => {
    const [allApps, setAllApps] = useState([]);
    
    const [filter, setFilter] = useState([]);
    const [filteredApps, setFilteredApps] = useState([]);
    const [summaryList, setSummaryList] = useState([]);
    
    const [selectedApp, setSelectedApp] = useState(null);
    
    useEffect(() => {
        async function getAllInitialApps() {
            const allInitialApps = await loader.waitForLoad(steamAppService.getAll());
            setAllApps(allInitialApps);
        }
        getAllInitialApps();
    }, []);

    const selectSteamApp = async (id) => {
        const app = await steamAppService.getById(440);
        setSelectedApp(app);
    };

    const onFilterChange = async (event) => {
        console.log('onFilterChange')
        setFilter(event.target.value);
        const tmpFilteredApps = event.target.value === '' ? [] : allApps.filter(a => a.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1);
        setFilteredApps(tmpFilteredApps);
        console.log('tmpFilteredApps.length')
        console.log(tmpFilteredApps.length)

        if (tmpFilteredApps.length > 0 && tmpFilteredApps.length <= 10) {
            const appIds = await loader.waitForLoad(steamAppService.getMultipleById(filteredApps.map(a => a.appid)));
            setSummaryList(appIds);
        }
    };

    console.log('rendering...')

    return (
        <div>
            <button onClick={ () => selectSteamApp(440) }>Click</button>
            <div>
            { selectedApp !== null
                ? <SteamApp app={ selectedApp } />
                : null
            }
            <p id='description'></p>
            </div>
            { summaryList.length > 0 
                ? <SteamAppSummaryList apps={ summaryList } />
                : null
            } 
            <SteamAppFilter filter={ filter } onFilterChange={ onFilterChange } />
            { filteredApps.length > 0
                ? <SteamAppNameList apps={ filteredApps } />
                : null
            }
        </div>
    );
}

export default App;
