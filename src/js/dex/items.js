import _ from "lodash";
import lang from 'json!lang/items.json'
import locale from './locale'

import data from "./grouped";
const { Item } = data;

const itemsWithoutSprites = [
  "ITEM_BLUK_BERRY",
  // "ITEM_MASTER_BALL",
  "ITEM_NANAB_BERRY",
  "ITEM_PINAP_BERRY",
  "ITEM_TROY_DISK",
  "ITEM_WEPAR_BERRY",
  "ITEM_X_ATTACK",
  "ITEM_X_DEFENSE",
  "ITEM_X_MIRACLE"
]

function getBasicItemInfo(item) {
  return {
    id: item.id,
    name: lang[item.id].name[locale],
    desc: lang[item.id].description[locale],
    category: lang.CATEGORIES[item.data.Category].name[locale]
  }
}

const items = _.chain(Item)
  .map(item => {
    return Object.assign(item, getBasicItemInfo(item));
  })
  .groupBy("category")
  .value();

export function getSpriteUrl(item) {
  if (itemsWithoutSprites.includes(item.id)) return
  const spriteName = item.id.match(/ITEM_(.*)$/)[1]
    .replace(/_/g, "")
    .toLowerCase();
  return `./assets/items/${spriteName}.png`;
}

console.log('Items', items);

export default items;