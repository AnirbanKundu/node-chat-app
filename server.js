var port = process.env.PORT || 5000;//(process.env.VCAP_APP_PORT || 3000);
console.log('Port is :' + port);
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var nicknames = [];
	
http.listen(port);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.sockets.on('connection', function(socket){
	socket.on('new user', function(data, callback){
		if (nicknames.indexOf(data) != -1){
			console.log('Data received:' + data);
			callback(false);
		} else{
			console.log('New user logged in : ' + data);
			callback(true);
			socket.nickname = data;
			console.log('Asynchronous Call.');
			nicknames.push(socket.nickname);
			updateNicknames();
		}
	});	
	function updateNicknames(){
		io.sockets.emit('usernames', nicknames);
	}

	socket.on('send message', function(data){
		io.sockets.emit('new message', {msg: data, nick: socket.nickname});
	});
	
	socket.on('disconnect', function(data){
		if(!socket.nickname) return;
		console.log('data recieved',data);
		console.log('User Disconnected',socket.nickname);
		nicknames.splice(nicknames.indexOf(socket.nickname), 1);
		updateNicknames();
	});
});