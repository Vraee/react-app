import React, { useState, useEffect } from 'react';

import steamAppService from './services/steamApps';

const SteamAppList = ({ apps }) => {
    if (apps !== null) {
        return(
            apps.map( a =>
                <SteamAppSummarised key={ a.appid } app={ a }/>
            )
        );
    }

    return null;
};

const SteamAppSummarised = ({ app }) => {
    return(
        <div>
            <h2>{ app.name }</h2>
            <p>{ app.type }</p>
            <p>{ app.short_description }</p>
        </div>
    );
}

const SteamApp = ({ app }) => {
    return(
        <div>
            <h2>{ app.name }</h2>
            <p>{ app.detailed_description }</p>
            { app.screenshots !== undefined && app.screenshots.length > 0
                ? <img src={ app.screenshots[0].path_thumbnail } width='200' alt={ `screenshot of Steam app ${ app.name }` } />
                : null
            }
        </div>
    );
};

const App = () => {
    const [allApps, setAllApps] = useState([]);
    const [allAppNames, setAllAppNames] = useState([]);

    const [selectedApp, setSelectedApp] = useState(null);

    useEffect(() => {
        async function getAllInitialApps() {
            const allInitialApps = await steamAppService.getAll();
            setAllApps(allInitialApps);
        }
        getAllInitialApps();
    }, []);

    const selectSteamApp = async (id) => {
        const app = await steamAppService.getById(440);
        setSelectedApp(app);
    }

    return (
        <div>
            <button onClick={ () => selectSteamApp(440) }>Click</button>
            { selectedApp !== null
                ? <SteamApp app={ selectedApp } />
                : null
            }
            { allApps.length > 0
                ? <SteamAppList apps={ allApps } />
                : null
            }
        </div>
    );
}

export default App;
