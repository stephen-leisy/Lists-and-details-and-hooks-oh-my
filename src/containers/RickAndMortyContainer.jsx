import React, { useState, useEffect } from 'react';
import CharacterList from '../components/characters/CharacterList';
import PageButtons from '../components/pagination/PageButtons';
import { getCharacters } from '../services/ApiCall';

export default function RickAndMortyContainer() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    getCharacters(pages)
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, [pages]);

  const handleClick = ({ target }) => {
    if (target.value === 'backward' && pages !== 1) {
      setPages(() => pages - 1);
    } else if (target.value === 'backward' && pages === 1) {
      setPages(pages);
    } else {
      setPages(() => pages + 1);
    }
  };

  if (loading) return <h2>Loading...</h2>;
  return (
    <>
      <PageButtons onClick={handleClick} />
      <CharacterList characters={characters} />;
    </>
  );
}
