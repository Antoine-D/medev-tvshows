const axios = require('axios');
const { Client } = require('es6');
const client = new Client({ node: 'http://localhost:9200' });

const bulkData = data => {
    const bulk = {
        index: {
            _index: 'shows',
            _type: '_doc',
            _id: data.tvShow.id
        }
    };
    return [bulk, data.tvShow];
};

const indexTvShows = (show_id = 1) => {
  axios
    .get(`https://www.episodate.com/api/show-details?q=${show_id}`)
    .then(resp => {
      indexTvShows(show_id + 1);

      const bulk = bulkData(resp.data);
      debugger;

      client
        .bulk({
          refresh: true,
          body: bulk
        })
        .then(() => {
          console.log(`Your TV Show ${show_id} is indexed!`);
        });
    })
    .catch(e => {
      console.error(e);
      indexTvShows(show_id + 1);
    });
};

indexTvShows();
