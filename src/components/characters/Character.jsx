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

Character.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;
