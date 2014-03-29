var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/projectrate');

module.exports = {
    Project: require(__dirname + '/Project.js')(mongoose)
}
