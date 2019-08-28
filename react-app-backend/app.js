const express = require('express');
const cors = require('cors');

const steamAppsRouter = require('./controllers/steamApps');

const app = express();
app.use(cors());
app.use(express.static('build'));
app.use('/api/steamapps', steamAppsRouter);

module.exports = app;