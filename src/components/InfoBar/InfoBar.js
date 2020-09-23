import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './InfoBar.module.scss';

const InfoBar = ({ room }) => {
  const trimmedRoomName = room.trim().toLowerCase();
  return (
    <div className="content">
      <div className="has-text-centered">
        <h2>Chat in room: {trimmedRoomName}</h2>
      </div>

      <div className={classNames('has-text-right', styles.close)}>
        <Link to={'/'}>
          <button className="delete"></button>
        </Link>
      </div>
    </div>
  );
};
export default InfoBar;
