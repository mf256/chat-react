const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const router = require('./router');
const { Socket } = require('dgram');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

io.on('connection', (socket) => {
  console.log('User conected.');
  
  socket.on('disconnect', () => {
    console.log('User disconected.');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server has started on ${PORT}.`));