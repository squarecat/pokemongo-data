import badges from "./badges.json";
import filters from "./filters.json";
import items from "./items";
import moves from "./moves.json";
import pokemon from "./pokemon.json";
import types from "./types.json";

const types = {
  badge: badges,
  fitler: filters,
  item: items,
  move: moves,
  pokemon,
  type_effective: types,
  type: types
};

export function translate({ type, id }) {
  if (type && types[type]) {
    return types[type][id];
  }
  return _.find(types, lang => {
    return lang[id];
  });
}