const steamAppsRouter = require('express').Router();
const request = require('request');

const steamKey = 'BDB5E293C348DB91175B17297A4BD784';
const baseUrlApi = 'http://api.steampowered.com/';
const allAppsUrl = `${ baseUrlApi }ISteamApps/GetAppList/v0002/?key=${ steamKey }&format=json`;

const baseUrlStore = "https://store.steampowered.com/";
const appDetailsUrl = `${ baseUrlStore }api/appdetails`;

steamAppsRouter.get('/', async (req, res) => {
    try {
        await request(allAppsUrl, (err, response, body) => {
            console.log(body)
            res.send(JSON.parse(body));
        })
    } catch (exception) {
        console.log(exception);
    }
});

steamAppsRouter.get('/:id', async (req, res) => {
    try {
        await request(`${ appDetailsUrl }/?appids=${ req.params.id }`, (err, response, body) => {
            console.log(body)
            res.send(JSON.parse(body));
        });
    } catch (exception) {
        console.log(exception);
    }
});

module.exports = steamAppsRouter;