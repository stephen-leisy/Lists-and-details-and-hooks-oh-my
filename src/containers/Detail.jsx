import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCharacter } from '../services/ApiCall';
import Character from '../components/characters/Character';

const Detail = ({
  match: {
    params: { id },
  },
}) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    getCharacter(id)
      .then(setCharacter)
      .finally(() => setLoading(false));
  }, []);
  console.log('detail', id);

  if (loading) return <h2>Loading...</h2>;
  return (
    <main>
      <Character {...character} />
    </main>
  );
};

export default Detail;
