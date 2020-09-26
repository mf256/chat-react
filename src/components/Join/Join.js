import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';

import ErrorInfo from 'components/ErrorInfo/ErrorInfo';

import styles from './Join.module.scss';

function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && room) {
      history.push(`/chat?name=${name}&room=${room}`);
    } else {
      setError('Please enter user and room name.');
    }
  };

  return (
    <div className={classNames('container', styles.container)}>
      <div className="content has-text-centered">
        <h2>Join the Chat</h2>
        <div className="field">
          <input
            placeholder="Name"
            className="input is-info"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="field">
          <input
            placeholder="Room"
            className="input is-info"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
            onKeyPress={(event) =>
              event.key === 'Enter' ? handleSubmit(event) : null
            }
          />
        </div>
        <button
          className={'button is-link is-fullwidth'}
          type="submit"
          onClick={(event) => handleSubmit(event)}
        >
          Sign In
        </button>
        <ErrorInfo errorMessage={error} styles={styles} />
      </div>
    </div>
  );
}

export default Join;
