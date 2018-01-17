const express = require("express");
const nedb = require("nedb");
const rest = require("express-nedb-rest");
const cors = require("cors"); // Cross domain transfer of API

const app = express();

const datastore = new nedb({
	filename: "mycoffeeapp.db",
	autoload: true
});

const restAPI = rest();
restAPI.addDatastore('coffees', datastore);

app.use(cors()); // This will allow the API to be used from other domains

app.use('/', restAPI); // We want the root folder of this APP to be executed by RESTFUL API.

app.listen(3000);