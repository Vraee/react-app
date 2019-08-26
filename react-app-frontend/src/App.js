import React, { useState, useEffect } from 'react';

import steamAppService from './services/steamApps';

const AppList = ({ apps }) => {
    if (apps !== null) {
        return(
            apps.map(a => a.name)
        );
    }

    return null;
}

const App = () => {
    const [allApps, setAllApps] = useState([]);
    const [allAppNames, setAllAppNames] = useState([]);

    const [selectedApp, setSelectedApp] = useState(null);

    useEffect(() => {
        async function getAllInitialApps() {
            const allInitialApps = await steamAppService.getAll();
            console.log('initial apps: ' + allInitialApps)
            await setAllApps(allInitialApps);
            console.log('aaaaa')
            console.log('all apps: ' + allApps);
        }
        getAllInitialApps();
    }, []);

    const selectSteamApp = async (id) => {
        const appData = await steamAppService.getById(440);
        console.log("Selected app data " + appData)
        setSelectedApp(appData);
        console.log(selectedApp)
    }

    return (
        <div>
            {/* { allApps.length > 0
                ? <AppList apps={ allApps.applist.apps } />
                : <h2>aaaaaa</h2>
            } */}

            <button onClick={ () => selectSteamApp(440) }>Click</button>
            <h1>App</h1>
        </div>
    );
}

export default App;
