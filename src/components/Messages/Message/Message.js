import React from 'react';
import classNames from 'classnames';

import styles from './Message.module.scss';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  const currentUserStyles = ['is-link', styles.myMessage];
  const className = classNames(
    'message',
    styles.message,
    isSentByCurrentUser && currentUserStyles
  );

  return (
    <div className={className}>
      <div class="message-header">
        {isSentByCurrentUser ? trimmedName : user}
      </div>
      <div class="message-body">{ReactEmoji.emojify(text)}</div>
    </div>
  );
};

export default Message;
