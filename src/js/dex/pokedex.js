import _ from "lodash";

import data from "./grouped";
const { Pokemon } = data;

export const sortableProps = [{
  value: "dexNumber",
  label: "Pokedex Number",
  icon: "number.png"
}, {
  value: "name",
  label: "Name",
  icon: "az.png"
}, {
  value: "data.Stats.BaseAttack",
  label: "Base Attack",
  sort: (val) => -val,
  icon: "attack.png"
}, {
  value: "data.Stats.BaseStamina",
  label: "Stamina",
  sort: (val) => -val,
  icon: "hp.png"
}, {
  value: "data.Stats.BaseDefense",
  label: "Base Defence",
  sort: (val) => -val,
  icon: "defence.png"
}, {
  value: "data.Encounter.BaseCaptureRate",
  label: "Capture Rate",
  icon: "pokeball.png"
}, {
  value: "data.Encounter.BaseFleeRate",
  label: "Flee Chance",
  transform: (val) => `${val * 100}%`,
  icon: "flee.png"
}, {
  value: "data.CandyToEvolve",
  label: "Candy To Evolve",
  icon: "candy.png"
}];
const sortDirection = "desc";
const selectedSort = "dexNumber";

function getBasicPokeInfo(poke) {
  const [ id, type ] = poke.id.split("_");
  const name = poke.id.match(/V.{4}_POKEMON_(.*)$/)[1].replace("_", " ");
  return {
    id: id.substring(1, id.length),
    dexNumber: id.toLowerCase().substring(3, id.length),
    name: name.substring(0, name.length - 1).toLowerCase()
  };
}

const pokemon = _.chain(Pokemon)
  .map(poke => {
    return Object.assign(poke, getBasicPokeInfo(poke));
  })
  .sortBy(poke => sortDirection === "desc" ? _.get(poke, selectedSort) : -_.get(poke, selectedSort))
  .value();

export function getSpriteUrl(poke) {
  return `./assets/sprites/${poke.dexNumber}.png`;
}

export function getEvoChain(poke) {
  let family = pokemon.filter(p => p.data.FamilyId === poke.data.FamilyId);
  return _.sortBy(family, p => parseInt(p.dexNumber), 10);
}

export function sortPokemonOnValue(value) {
  const prop = sortableProps.find(sp => sp.value === value);
  return _.sortBy(pokemon, (m) => {
    const val = _.get(m, value);
    return prop && prop.sort ? prop.sort(val) : val;
  });
}

console.log(pokemon);

export default pokemon;
