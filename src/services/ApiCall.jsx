export const getCharacters = async (pages) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${pages}`
  );
  const { results } = await res.json();
  return results;
};
