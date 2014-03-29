module.exports = function (app, db) {

    app.get("/api/projects", function (req, res) {
        db.Project.find({}, res.apiJson);
    });

};
