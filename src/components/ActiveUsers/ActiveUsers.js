import React from 'react';

const ActiveUsers = ({ users }) => (
  <div>
    {users ? (
      <div className="content">
        <h2>Users in room:</h2>
        <div className="activeContainer">
          {users.map(({ name }) => (
            <span key={name} className="tag is-light">
              {name}
            </span>
          ))}
        </div>
      </div>
    ) : null}
  </div>
);

export default ActiveUsers;
