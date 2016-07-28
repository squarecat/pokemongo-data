import lang from "json!lang/types.json";
import data from "./grouped";

const { TypeEffective } = data;

export function transformType(typeId) {
  const id = typeId.match(/^"?([a-zA-Z_]+)/)[1];
  return lang[id].name.en;
}
const first = TypeEffective[0].TypeEffective;
var dec = [];
for (var i = 0; i < first.length; i++) {
  if (first[i] === "\\") {
    var octstr = first.substring(i + 1, i + 4);
    dec.push(parseInt(octstr, 8));
    i = i + 3;
  } else {
    var octstr = first.charCodeAt(i);
    dec.push(parseInt(octstr));
  }
}
console.log(dec);

// [0, 0, 128, 63, 205, 204, 76, 63, 205, 204, 76, 63, 205, 204, 76, 63, 0, 0, 128, 63, 0, 0, 128, 63, 0, 0, 128, 63, 205, 204, 76, 63, 205, 204, 76, 63, 205, 204, 76, 63, 0, 0, 128, 63, 0, 0, 160, 63, 0, 0, 128, 63, 0, 0, 160, 63, 0, 0, 128, 63, 0, 0, 128, 63, 0, 0, 160, 63, 205, 204, 76, 63]