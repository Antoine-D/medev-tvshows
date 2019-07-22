const axios = require('./client');

const getTvShows = async (page = 1) => {
    const resp = await axios.get(`/shows?page=${page}`)
        .then(response => {
            return response.data;
        });
    return resp;
};

module.exports = {
    getTvShows,
};