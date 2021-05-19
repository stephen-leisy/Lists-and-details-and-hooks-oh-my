import React from 'react';
import PropTypes from 'prop-types';

export default function PageButtons({ onClick }) {
  return (
    <section>
      <button onClick={onClick} value="backward">
        Previous
      </button>
      <button onClick={onClick} value="forward">
        Next
      </button>
    </section>
  );
}

PageButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
};
