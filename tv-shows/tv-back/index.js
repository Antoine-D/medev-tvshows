const express = require('express');
const cors = require('cors');
const { Client } = require('es6');
const client = new Client({ node: 'http://localhost:9200' });

const get_all = require('./queries/getAll');
const get_show_by_id = require('./queries/get_show_by_id');
const get_show_by_country = require( './queries/get_shows_by_country');


const app = express();
app.use(cors('*'));

get_all(app, client);
get_show_by_id( app, client );
get_show_by_country( app, client );

const port = 3005;
app.listen(port, () => console.log('App listening on port : ' + port));
