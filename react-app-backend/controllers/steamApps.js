const steamAppsRouter = require('express').Router();
const axios = require('axios');

const steamKey = 'BDB5E293C348DB91175B17297A4BD784';
const baseUrlApi = 'http://api.steampowered.com/';
const allAppsUrl = `${ baseUrlApi }ISteamApps/GetAppList/v0002/?key=${ steamKey }&format=json`;

const baseUrlStore = "https://store.steampowered.com/";
const appDetailsUrl = `${ baseUrlStore }api/appdetails`;

steamAppsRouter.get('/', async (req, res) => {
    try {
        const allApps = await axios.get(allAppsUrl);
        res.send(allApps.data);
    } catch (exception) {
        console.log(exception);
    }
});

steamAppsRouter.get('/:id', async (req, res) => {
    try {
        // Despite the parameter name 'appids', the API apparently doesn't
        // (currently) support fetching data for multiple games at once.
        const steamApp = await axios.get(`${ appDetailsUrl }/?appids=${ req.params.id }`);
        res.send(steamApp.data);
    } catch (exception) {
        console.log(exception);
    }
});

// TODO GetNewsForApp, GetGlobalAchievementPercentagesForApp 

module.exports = steamAppsRouter;