var express = require('express');
var app = express();
var server= require("http").createServer(app);
var io=require('socket.io')(server);
app.use(express.static('library'));
app.use(express.static('css'));

app.get('/',function(req,res){
    res.sendFile(__dirname + "/view.html");
});

io.on('connection',function(client){
    console.log('client connected ... ');
    // client.on('join',function(data){
    //     console.log(data);
    // });

    client.on('messages',function(data){
        // client.emit('broad' ,data);
        client.broadcast.emit('broad',data);
    });
});



server.listen(3000,function(){console.log("sever Running")});