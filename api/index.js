module.exports = function (app, db) {

    //a simple middleware to send data right from
    //db/whatever callbacks
    app.use(function (req, res, next) {
        res.apiJson = function (err, data, code) {
            if (err) {
                code = code || 400;
                data = data || err || {};
            } else {
                code = code || 200;
            }

            res.send(data, code);
        };
        next();
    });

    //all api files imported here
    require(__dirname + '/projects')(app, db);
}
