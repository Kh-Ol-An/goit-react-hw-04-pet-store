import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ error, timedOut, pastDelay, retry }) => {
  if (error) {
    return (
      <div>
        <h2> Error!</h2>
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
    );
  }

  if (timedOut) {
    return (
      <div>
        <h2> Taking a long time...</h2>
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
    );
  }

  if (pastDelay) {
    return (
      <div style={{ color: 'red' }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  return null;
};

Loader.defaultProps = {
  error: null,
};

Loader.propTypes = {
  error: PropTypes.shape(),
  timedOut: PropTypes.bool.isRequired,
  pastDelay: PropTypes.bool.isRequired,
  retry: PropTypes.func.isRequired,
};

export default Loader;
