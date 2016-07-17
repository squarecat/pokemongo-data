import PokemonAssets from "../../../assets/master.json";

const groupedAssets = _.chain(PokemonAssets.Items)
  .map(item => {
    const keys = Object.keys(item);
    const itemType = keys.find(k => k !== "TemplateId");
    return {
      type: itemType,
      id: item.TemplateId,
      data: item[itemType]
    };
  })
  .groupBy("type")
  .value();

console.log(groupedAssets);
export default groupedAssets;