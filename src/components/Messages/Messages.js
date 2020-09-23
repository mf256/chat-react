import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';

const Messages = ({ messages, name }) => (
  <ScrollToBottom className="content">
    {messages.map((message, i) => (
      <Message message={message} name={name} key={i} />
    ))}
  </ScrollToBottom>
);

export default Messages;
