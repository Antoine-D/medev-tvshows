const get_show_by_country = (app, client) => {
    return app.get('/country/:country', (req, res) => {

        console.log( req.params.country );

        const query = {
            index: 'popular',
            type: '_doc',
            body: {
                "query": {
                    "match_phrase": {
                        "message": req.params.country
                    }
                }
            }
        };


        client
            .search(query)
            .then(({ body }) => {
                res.status(200).send(body.hits.hits);
            })
            .catch(console.error);
    });
};

module.exports = get_show_by_country;