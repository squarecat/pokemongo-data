import _ from "lodash";

import { pokemon as rawPokemonList } from "./grouped";

export const sortableProps = [{
  value: "dex_number",
  label: "Pokedex Number",
  icon: "number.png"
}, {
  value: "name",
  label: "Name",
  icon: "az.png"
}, {
  value: "stats.base_attack",
  label: "Base Attack",
  sort: (val) => -val,
  icon: "attack.png"
}, {
  value: "stats.base_stamina",
  label: "Stamina",
  sort: (val) => -val,
  icon: "hp.png"
}, {
  value: "stats.base_defense",
  label: "Base Defence",
  sort: (val) => -val,
  icon: "defence.png"
}, {
  value: "encounter.base_capture_rate",
  label: "Capture Rate",
  icon: "pokeball.png"
}, {
  value: "encounter.base_flee_rate",
  label: "Flee Chance",
  transform: (val) => `${val * 100}%`,
  icon: "flee.png",
  sort: (val) => -val
}, {
  value: "candy_to_evolve",
  label: "Candy To Evolve",
  icon: "candy.png"
}];
const sortDirection = "desc";
const selectedSort = "dexNumber";

function getBasicPokeInfo(poke) {
  const name = poke.pokemon_id.toLowerCase();
  const dexNumber = poke.id.match(/V(.{4})/)[1];
  return {
    dex_number: dexNumber.substring(1, dexNumber.length),
    name: name.toLowerCase()
  };
}
console.log(rawPokemonList)
const pokemon = _.chain(rawPokemonList)
  .map(poke => {
    return Object.assign(poke, getBasicPokeInfo(poke));
  })
  .sortBy(poke => sortDirection === "desc" ? _.get(poke, selectedSort) : -_.get(poke, selectedSort))
  .value();

export function getSpriteUrl(poke) {
  return `./assets/sprites/${poke.dex_number}.png`;
}

export function getEvoChain(poke) {
  let family = pokemon.filter(p => p.family_id === poke.family_id);
  return _.sortBy(family, p => parseInt(p.dex_number), 10);
}

export function sortPokemonOnValue(value) {
  const prop = sortableProps.find(sp => sp.value === value);
  return _.sortBy(pokemon, (m) => {
    const val = _.get(m, value);
    return prop && prop.sort ? prop.sort(val) : val;
  });
}

console.log('Pokemon', pokemon);

export default pokemon;
