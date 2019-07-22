const axios = require('axios');
const { Client } = require('es6');
const client = new Client({ node: 'http://localhost:9200' });

const bulkData = data => {
    const bulk = {
        index: {
            _index: 'popular',
            _type: '_doc',
            _id: data.id
        }
    };
    return [bulk, data];
};

const indexPopularsShows = (page = 1) => {
  axios
    .get(`https://www.episodate.com/api/most-popular?page=${page}`)
    .then(resp => {
        indexPopularsShows(page + 1);

        //console.log( resp.data.tv_shows );
      resp.data.tv_shows.forEach( show => {
        //console.log( show );
        const bulk = bulkData( show );
        debugger;

      client
        .bulk({
          refresh: true,
          body: bulk
        })
        .then(() => {
          console.log(`Your TV Show ${page} is indexed!`);
        });
      });
      
      
    })
    .catch(e => {
      console.error(e);
      indexPopularsShows(page + 1);
    });
};

indexPopularsShows();
