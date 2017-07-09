var app = require('./config/server');
var port = 3000;


var rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app);

var rotaHome = require('./app/routes/home');
rotaHome(app);

app.listen(port, function() {
	console.log("rodando na porta " + port);
});