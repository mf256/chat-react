import React from 'react';
import classNames from 'classnames';

import styles from './Message.module.scss';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  const trimmedName = name.trim().toLowerCase();
  const isSentByCurrentUser = user === trimmedName;
  const isSentByAdminUser = user === 'admin';

  const currentUserStyles = ['is-link', styles['my-message']];
  const adminUserStyles = styles['admin-message'];
  const otherUserStyles = ['is-success'];
  const className = classNames(
    'message',
    styles.message,
    isSentByCurrentUser && currentUserStyles,
    isSentByAdminUser && adminUserStyles,
    !isSentByCurrentUser && !isSentByAdminUser && otherUserStyles
  );

  return (
    <div className={className}>
      <div className={classNames('message-header', styles['message-header'])}>
        {isSentByCurrentUser ? trimmedName : user}
      </div>
      <div className={classNames('message-body', styles['message-body'])}>
        {ReactEmoji.emojify(text)}
      </div>
    </div>
  );
};

export default Message;
