var express = require('express');
var httpProxy = require('http-proxy');
var url = require('url');
var fs = require('fs');
var path = require('path');
var util = require('util');

var server = express();

var proxy = new httpProxy.RoutingProxy();

server.use(express.static(__dirname + '/client'));

server.get("/data", function(req, res) {
    res.contentType('application/json');
    res.send(JSON.stringify({hello:"world"}));
});

console.log('listening to http://0.0.0.0:3000');
server.listen(3000);