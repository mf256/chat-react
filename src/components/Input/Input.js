import React from 'react';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <div className="field">
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) =>
          event.key === 'Enter' ? sendMessage(event) : null
        }
      />
    </div>
    <button
      className={'button is-link is-fullwidth'}
      onClick={(e) => sendMessage(e)}
    >
      Send
    </button>
  </form>
);

export default Input;
