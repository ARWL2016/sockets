var app = require('express')();
var http = require('http').Server(app);
// the io server is mounted on the http server
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log('user connect event');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
})

http.listen(3000, function(){
  console.log('listening on *:3000');
});