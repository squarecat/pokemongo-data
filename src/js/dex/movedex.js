import _ from "lodash";

import data from "./grouped";
import { transformType } from "dex/typedex";

const { Move } = data;

const STAB = 1.25;

export const sortableProps = [{
  value: "data.Power",
  label: "Power",
  icon: "power.png",
  sort: (val) => -val
}, {
  value: "name",
  label: "Name",
  icon: "az.png"
}, {
  value: "data.CriticalChance",
  label: "Critical Chance",
  transform: (val) => `${val * 100}%`,
  sort: (val) => -val,
  icon: "critical.png"
}, {
  value: "data.DurationMs",
  label: "Duration",
  transform: (val) => `${val / 1000}s`,
  icon: "duration.png"
}, {
  value: "dps",
  label: "Damage per second (DPS)",
  sort: (val) => -val,
  transform: (val) => Math.round(val * 10 ) / 10,
  icon: "dps.png"
}, {
  value: "data.EnergyDelta",
  label: "Energy Usage",
  icon: "usage.png"
}];

const moves = Move.map(move => {
  let numericId = move.id.substring(1, move.id.length - 1);
  numericId = numericId.split("_");
  numericId = parseInt(numericId[0].substring(1))

  const movesPerSec = 1000 / move.data.DurationMs;
  return Object.assign(move, {
    numericId,
    name: move.data.VfxName.replace("_", " "),
    type: transformType(move.data.Type),
    eus: movesPerSec * move.data.EnergyDelta,
    dps: movesPerSec * move.data.Power
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
  const movesOct = poke.data.QuickMoves;
  const movesOctArr = movesOct.substring(1, movesOct.length - 1).split("\\001");
  const movesIntArr = movesOctArr.map(oct => parseInt(oct.substring(1), 8)).filter(i => !isNaN(i));
  return _.chain(movesIntArr)
    .map(int => moves.find(m => m.numericId === int))
    .sortBy("data.Power")
    .value();
}

export function getSpecialMoveSet(poke) {
  const specialMoves = [];
  let specialMovesStr = poke.data.CinematicMoves;
  specialMovesStr = specialMovesStr.substring(1, specialMovesStr.length - 1);
  const specialMovesFromOct = specialMovesStr.match(/(\\\d{3})/g);
  if (specialMovesFromOct) {
    specialMovesFromOct.forEach(moveOct => {
      specialMovesStr = specialMovesStr.replace(moveOct, "");
      const move = moves.find(m => m.numericId === parseInt(moveOct.substring(1), 8));
      specialMoves.push(move);
    })
  }
  specialMovesStr.split("").forEach(s => {
    specialMoves.push(moves.find(m => m.numericId === s.charCodeAt(0)));
  });
  return _.chain(specialMoves)
    .filter(specialMoves => specialMoves)
    .sortBy(specialMoves, "data.Power")
    .reverse()
    .value();
}
