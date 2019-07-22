const hbs = require( 'express-handlebars');
const express = require('express');
const app = express();
const port = 8081;

const { getTvShows } = require('./api');

app.get('/', async (req, res) => {
    const tvshows = await getTvShows();
    res.render('home', {layout: 'default', template: 'home-template', tvshows});
});

app.listen(port, () => console.log('App listening on port : ' + port));
