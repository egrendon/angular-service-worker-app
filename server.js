'use strict';
//Declare express server
const express = require('express');
const app = express();
const path = require('path');
const APP_FOLDER_NAME = 'angular-service-worker-app';

// Serve only the static files form the dist directory
app.use(express.static(`${__dirname}/dist/${APP_FOLDER_NAME}`));

const portNumber = process.env.PORT || 8080;

// ---- START UP THE NODE SERVER using ENV or DEFAULT PORT ----
app.listen(portNumber, function () {
    console.log('Node Server.js Listening on port http://localhost:' + portNumber); //Listening on port 8080
});


//PathLocationStrategy
app.get('/*', function (req, res) {
    let pathForMe = `${__dirname}/dist/${APP_FOLDER_NAME}/index.html`;
    console.log("get " + pathForMe);
    res.sendFile(path.join(pathForMe));
});