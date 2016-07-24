import _ from "lodash";

import data from "./grouped";
const { Item } = data;

function getBasicItemInfo(item) {
  const name = item.id.match(/ITEM_(.*)$/)[1].replace(/_/g, " ");
  return {
    uniqueId: item.data.UniqueId,
    name: name.substring(0, name.length - 1).toLowerCase(),
    desc: 'A spray-type medicine for treating wounds. It restores HP of one Pokemon by 20 points.'
  }
}

const items = _.chain(Item)
  .map(item => {
    return Object.assign(item, getBasicItemInfo(item));
  })
  .value();

export function getSpriteUrl(item) {
  return `./assets/sprites/${item.id}.png`;
}

console.log('Items', items);

export default items;