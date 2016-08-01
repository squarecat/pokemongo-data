import PokemonAssets from "./store";

const unused = [
  "battle",
  "camera",
  "encounter",
  "gym_level",
  "iap_item_display",
  "iap",
  "move_sequence",
  "player_level",
  "pokemon_upgrades"
];

const groupedAssets = _.chain(PokemonAssets.item_templates)
  .map(item => {
    const id = item.template_id;
    const itemTypeKey = Object.keys(item).find(k => k !== "template_id");
    const itemType = itemTypeKey.replace("_settings", "");
    return Object.assign({
      id,
      _type: itemType,
    }, item[itemTypeKey]);
  })
  .groupBy("_type")
  .omit(unused)
  .value();

console.log('Grouped', groupedAssets);
export default groupedAssets;
export const pokemon = groupedAssets.pokemon;
export const move = groupedAssets.move;