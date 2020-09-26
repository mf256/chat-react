import React from 'react';
import classNames from 'classnames';

const ErrorInfo = ({ errorMessage, styles }) => {
  return (
    <>
      {errorMessage && (
        <div
          className={classNames(
            'notification is-danger is-light',
            styles.notification
          )}
        >
          {errorMessage}
        </div>
      )}
    </>
  );
};
export default ErrorInfo;
