import _ from "lodash";

import {
  moves as rawMovesList,
  battleSettings
} from "./grouped";

import lang from "json!lang/moves.json";
import filtersLang from "json!lang/filters.json";
import { transformType } from "dex/typedex";

console.log("STAB", battleSettings)
export const sortableProps = [{
  value: "power",
  label: filtersLang.MOVES.POWER.en,
  icon: "power.png",
  sort: (val) => -val
}, {
  value: "name",
  label: filtersLang.MOVES.NAME.en,
  icon: "az.png"
}, {
  value: "critical_chance",
  label: filtersLang.MOVES.CRITICALCHANCE.en,
  transform: (val) => `${val * 100}%`,
  sort: (val) => -val,
  icon: "critical.png"
}, {
  value: "duration_ms",
  label: filtersLang.MOVES.DURATIONMS.en,
  transform: (val) => `${val / 1000}s`,
  icon: "duration.png"
}, {
  value: "dps",
  label: filtersLang.MOVES.DPS.en,
  sort: (val) => -val,
  transform: (val) => Math.round(val * 10 ) / 10,
  icon: "dps.png"
}, {
  value: "energy_delta",
  label: filtersLang.MOVES.ENERGYDELTA.en,
  icon: "usage.png"
}];

const moves = rawMovesList.map(move => {
  const id = move.id.replace(/V.{4}_MOVE_/, "");
  const movesPerSec = 1000 / move.duration_ms;
  return Object.assign(move, {
    id,
    name: lang[move.id].name.en,
    type: transformType(move.pokemon_type),
    eus: movesPerSec * move.energy_delta,
    dps: movesPerSec * move.power
  })
});

console.log('Moves', moves);
export default moves;

export function sortMovesOnValue(value) {
  const prop = sortableProps.find(sp => sp.value === value);
  return _.sortBy(moves, (m) => {
    const val = _.get(m, value);
    return prop && prop.sort ? prop.sort(val) : val;
  });
}

export function doesLearn(poke, move) {
  return [
    ...getMoveSet(poke),
    ...getSpecialMoveSet(poke)
  ].some(pokeMove => pokeMove.id === move.id);
}

export function getMoveSet(poke) {
  return _.chain(poke.quick_moves)
    .map(moveId => {
      return moves.find(m => m.id === moveId);
    })
    .sortBy("power")
    .value();
}

// normal moves don't have STAB
export function hasStab(move) {
  return move.pokemon_type !== "POKEMON_TYPE_NORMAL";
}

export function calculateStab(val) {
  return (val * battleSettings.same_type_attack_bonus_multiplier)
    .toFixed(1);
}

export function getSpecialMoveSet(poke) {
  return _.chain(poke.cinematic_moves)
    .map(moveId => {
      return moves.find(m => m.id === moveId);
    })
    .filter(specialMoves => specialMoves)
    .sortBy("power")
    .reverse()
    .value();
}
