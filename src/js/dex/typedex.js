export function transformType(typeStr) {
  return typeStr.match('POKEMON_TYPE_(.*)')[1].toLowerCase();
}
