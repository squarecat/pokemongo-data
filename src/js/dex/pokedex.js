import data from "./grouped";
const { Pokemon } = data;

function getBasicPokeInfo(poke) {
  const [ id, type, name ] = poke.id.split("_");
  return {
    id: id.substring(1, id.length),
    dexNumber: id.toLowerCase().substring(3, id.length),
    name: name.toLowerCase().substring(0, name.length - 1)
  };
}

const pokemon = Pokemon.map(poke => {
  return Object.assign(poke, getBasicPokeInfo(poke));
});

console.log(pokemon);
export default pokemon;
