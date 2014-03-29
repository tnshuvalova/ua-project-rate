module.exports = function (mongoose) {
    var Project = new mongoose.Schema({
        title: String,
        repoUrl: String,
        siteUrl: String,
        Description: String,
        founders: [String],
        tags: [String],
        likesCount: Number,
        repoCommits: Number,
        repoFollowers: Number,
        logo: String
    });

    return mongoose.model('Project', Project);
};
