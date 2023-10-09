


// 포켓몬 151마리 정보를 가져오는 API
export async function getPokemonList()  {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();
  return data.results
}