import lang from "json!lang/types.json";

export function transformType(typeId) {
  const id = typeId.match(/^"?([a-zA-Z_]+)/)[1];
  return lang[id].name.en;
}