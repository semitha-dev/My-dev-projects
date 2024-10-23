const { Socket } = require('dgram');
const express = require('express')
const http = require('http')
const {Server} = require('socket.io')

const app = express();
const server =  http.createServer();

const io = new Server(server,{
    cors:{
        origin:"*",
    }
})


io.on('connection' , (socket) => {
    console.log('A user Has Connected')



    socket.on('message',(data) => {
        const {name , message} = data;
        io.emit('broadcast', {name , message});
        
    })




})


const PORT = 3000


app.listen(PORT,() => {
    console.log()
})

