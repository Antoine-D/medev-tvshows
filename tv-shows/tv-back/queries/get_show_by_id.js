const get_show_by_id = (app, client) => {
    return app.get('/show/:id', (req, res) => {
        const query = {
            index: 'shows',
            type: '_doc',
            body: {
                "query": {
                    "ids": {
                        "values": [req.params.id]
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

module.exports = get_show_by_id;