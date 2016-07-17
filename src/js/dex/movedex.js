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