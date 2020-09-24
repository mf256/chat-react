import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import classNames from 'classnames';

import ActiveUsers from 'components/ActiveUsers/ActiveUsers';
import InfoBar from 'components/InfoBar/InfoBar';
import Input from 'components/Input/Input';
import Messages from 'components/Messages/Messages';

import styles from './Chat.module.scss';

const ENDPOINT = process.env.ENDPOINT || 'localhost:5000';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setName(name);
    setRoom(room);

    socket = io(ENDPOINT);
    socket.emit('join', { name, room }, (error) => {
      if (error) {
        setError(error);
      }
    });

    return () => {
      socket.emit('diconnect', { name, room });
      socket.off();
    };
  }, [location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });

    socket.on('connect_error', function (e) {
      setError('Could not connect to server!');
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div className={classNames('container', styles.container)}>
      <div className="content has-text-centered">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      {error && (
        <div
          className={`notification is-danger is-light ${styles.notification}`}
        >
          {error}
        </div>
      )}
      <ActiveUsers users={users} />
    </div>
  );
};

export default Chat;
