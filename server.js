var express = require('express');
var httpProxy = require('http-proxy');
var url = require('url');
var fs = require('fs');
var path = require('path');
var util = require('util');

var server = express();
server.use(express.static(__dirname + '/client'));

var db = require(__dirname + '/db');
var api = require(__dirname + '/api')(server, db);

server.get('/api', function (req, res) {
   res.send({});
});

console.log('listening to http://0.0.0.0:3000');
server.listen(3000);
