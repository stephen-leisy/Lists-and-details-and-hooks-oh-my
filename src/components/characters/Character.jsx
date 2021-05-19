import React from 'react';
import PropTypes from 'prop-types';

function Character({ image, name, species }) {
  return (
    <figure>
      <img src={image} alt={name} />
      <figcaption>
        {name}: {species}
      </figcaption>
    </figure>
  );
}

Character.propTypes = {};

export default Character;
