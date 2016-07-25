import PokemonAssets from "./store";

const groupedAssets = _.chain(PokemonAssets.Items)
  .map(item => {
    const keys = Object.keys(item);
    const itemType = keys.find(k => k !== "TemplateId");
    const id = item.TemplateId.substring(1, item.TemplateId.length - 1)
    return {
      type: itemType,
      id,
      data: item[itemType]
    };
  })
  .groupBy("type")
  .value();

console.log('Grouped', groupedAssets);
export default groupedAssets;