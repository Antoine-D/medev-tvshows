const express = require('express');
const cors = require('cors');
const { Client } = require('es6');
const client = new Client({ node: 'http://localhost:9200' });

const get_all = require('./queries/getAll');
const get_show_by_id = require('./queries/get_show_by_id');
const get_show_by_country = require( './queries/get_shows_by_country');
const get_shows_popular = require('./queries/get_shows_populars');
const get_shows_by_popularity = require('./queries/get_by_popularity');


const app = express();
app.use(cors('*'));

get_all(app, client);
get_show_by_id( app, client );
get_show_by_country( app, client );
get_shows_popular( app, client );
get_shows_by_popularity( app, client );

const port = 3005;
app.listen(port, () => console.log('App listening on port : ' + port));
