import data from "./grouped";
const { Pokemon } = data;

function getBasicPokeInfo(poke) {
  const [ id, type, name ] = poke.id.split("_");
  return {
    id: id.substring(1, id.length),
    dexNumber: id.toLowerCase().substring(3, id.length),
    name: nameFromUniqueId(poke.id)
  };
}

const pokemon = Pokemon.map(poke => {
  return Object.assign(poke, getBasicPokeInfo(poke));
});

console.log(pokemon);
export default pokemon;

export function getEvoChain(poke) {
  let family = pokedex.filter(p => p.data.FamilyId === poke.data.FamilyId);
  return _.sortBy(family, p => parseInt(p.dexNumber), 10);
}

export function nameFromUniqueId(pokeId) {
  const name = pokeId.match(/V\d{4}_POKEMON_(.*)$/)[1]
    .replace("_", " ")
  return name.substring(0, name.length - 1)
    .toLowerCase();
}