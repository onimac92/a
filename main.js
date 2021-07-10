const WebSocket = require('ws');
const moment 	= require('moment-timezone');
const wss 	= new WebSocket.Server({port: 3000});

wss.on('connection', (ws, req) => {
	var interval = setInterval(() => {
		ws.send(moment(new Date()).tz('America/Los_Angeles').format("hh:mm:ss"));
	}, 60000);

	ws.on('message', (msg) => {
		//ws.send("algo");
	});
	
	ws.on('close', () => {
		clearInterval(interval);
	});
});
