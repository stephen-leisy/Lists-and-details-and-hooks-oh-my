import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';

function CharacterList({ characters }) {
  return (
    <div>
      <ul aria-label="characters">
        {characters.map((character) => (
          <Link key={character.id} to={`/${character.id}`}>
            <li key={character.id}>
              <Character {...character} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

export default CharacterList;
