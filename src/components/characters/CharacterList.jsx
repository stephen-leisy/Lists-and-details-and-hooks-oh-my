import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function CharacterList({ characters }) {
  console.log('here', characters);
  return (
    <div>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Character {...character} />
          </li>
        ))}
      </ul>
    </div>
  );
}

CharacterList.propTypes = {};

export default CharacterList;
