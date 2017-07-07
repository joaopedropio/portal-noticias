var http = require('http');
var express = require('express');

var port = 3000;

var server = http.createServer(function (req, res) {
	var categoria = req.url;

	if(categoria == '/parabens') {
		res.end("<html><body><p> m</p><body/><html>");
	}
}).listen(port);

console.log("rodando na porta " + port);

var livereload = require('livereload');
var server = livereload.createServer({exts: ['ejs', 'js']});
server.watch(__dirname + "/");