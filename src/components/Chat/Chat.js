import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.module.scss';

const ENDPOINT = 'localhost:5000';

let socket;

const Chat = ({ location }) => {
  // const [name, setName] = useState('');
  // const [room, setRoom] = useState('');

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    // setName(name);
    // setRoom(room);

    socket = io(ENDPOINT);
    console.log(socket);
  });

  return (
    <h1>Chat</h1>
  );
}

export default Chat;