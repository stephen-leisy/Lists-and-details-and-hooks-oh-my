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
      .then((characters) => setCharacters(characters))
      .finally(() => setLoading(false));
  }, [pages]);

  const handleForwardClick = () => setPages((pages) => pages + 1);
  const handleBackwardClick = () => {
    if (pages !== 1) {
      setPages((pages) => pages - 1);
    }
  };

  if (loading) return <h2>Loading...</h2>;
  return (
    <>
      <PageButtons
        backwardClick={handleBackwardClick}
        forwardClick={handleForwardClick}
      />
      <CharacterList characters={characters} />;
    </>
  );
}
