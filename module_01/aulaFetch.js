const fetchUrl = 'https://pokeapi.co/api/v2/pokemon/pikachu';

// fetch(fetchUrl)
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//   });

async function fetchPokemon(url) {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
  return response;
}

const pokemon = fetchPokemon(fetchUrl);
