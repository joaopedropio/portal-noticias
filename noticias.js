var http = require('http');
var express = require('express');

var port = 3000;

var server = http.createServer(function (req, res) {
	res.end("Hello");
}).listen(port);

console.log("rodando na porta " + port);

var livereload = require('livereload');
var server = livereload.createServer({exts: ['ejs']});
server.watch(__dirname + "/");