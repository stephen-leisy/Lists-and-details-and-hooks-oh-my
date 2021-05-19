import React from 'react';
import PropTypes from 'prop-types';

export default function PageButtons({ onClick }) {
  return (
    <div>
      <button onClick={onClick} value="backward">
        Previous
      </button>
      <button onClick={onClick} value="forward">
        Next
      </button>
    </div>
  );
}

PageButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
};
