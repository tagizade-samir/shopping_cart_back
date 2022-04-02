var app = require('./src/app');
var http = require('http');

var port = process.env.PORT || '3000';
app.set('port', port);


var httpServer = http.createServer(app);


httpServer.listen(port, onListening);

function onListening() {
	console.log('LISTENING ON: 3000');
}
