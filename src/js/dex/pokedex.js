import _ from "lodash";

import data from "./grouped";
const { Pokemon } = data;

const sortableProps = [{
  value: "dexNumber",
  label: "Pokedex number"
}, {
  value: "name",
  label: "Name"
}, {
  value: "baseAttack",
  label: "Base Attack"
}, {
  value: "baseDefence",
  label: "Base Defence"
}, {
  value: "data.Encounter.BaseCaptureRate",
  label: "Capture rate"
}, {
  value: "data.Encounter.BaseFleeRate",
  label: "Flee Chance"
}, {
  value: "data.CandyToEvolve",
  label: "Candy To Evolve"
}, {
  value: "avgWeight",
  label: "Average Weight"
}, {
  value: "avgHeight",
  label: "Average Height"
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
  return `/assets/sprites/${poke.dexNumber}.png`;
}

export function getEvoChain(poke) {
  let family = pokemon.filter(p => p.data.FamilyId === poke.data.FamilyId);
  return _.sortBy(family, p => parseInt(p.dexNumber), 10);
}

console.log(pokemon);

export default pokemon;
