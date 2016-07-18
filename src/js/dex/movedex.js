import data from "./grouped";
const { Move } = data;

const moves = Move.map(move => {
  let numericId = move.id.substring(1, move.id.length - 1);
  numericId = numericId.split("_");
  numericId = parseInt(numericId[0].substring(1))

  return Object.assign(move, {
    numericId
  })
});

console.log(moves);
export default moves;

export function getMoveSet(poke) {
  const movesOct = poke.data.QuickMoves;
  const movesOctArr = movesOct.substring(1, movesOct.length - 1).split("\\001");
  const movesIntArr = movesOctArr.map(oct => parseInt(oct.substring(1), 8)).filter(i => !isNaN(i));
  return _.chain(movesIntArr)
    .map(int => movedex.find(m => m.numericId === int))
    .sortBy("data.Power")
    .value();
}

export function getSpecialMoveSet(poke) {
  const specialMoves = [];
  let specialMovesStr = poke.data.CinematicMoves;
  specialMovesStr = specialMovesStr.substring(1, specialMovesStr.length - 1);
  const specialMovesFromOct = specialMovesStr.match(/(\\.{3})/g);
  if (specialMovesFromOct) {
    specialMovesFromOct.forEach(moveOct => {
      specialMovesStr = specialMovesStr.replace(moveOct, "");
      const move = movedex.find(m => m.numericId === parseInt(moveOct.substring(1), 8));
      specialMoves.push(move);
    })
  }
  specialMovesStr.split("").forEach(s => {
    specialMoves.push(movedex.find(m => m.numericId === s.charCodeAt(0)));
  });
  return _.chain(specialMoves)
    .filter(specialMoves => specialMoves)
    .sortBy(specialMoves, "data.Power")
    .reverse()
    .value();
}
