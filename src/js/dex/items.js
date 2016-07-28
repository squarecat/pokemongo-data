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

const commonKeys = [
  "Category",
  "ItemType",
  "UniqueId"
]

function getBasicItemInfo(item) {
  return {
    id: item.id,
    name: lang[item.id].name[locale],
    desc: getDescription(item),
    category: lang.CATEGORIES[item.data.Category].name[locale]
  }
}


function getDescription(item) {
  if (!item.data) return
  const extraDataObject = _.omit(item.data, commonKeys)

  const replacers = _.reduce(extraDataObject[Object.keys(extraDataObject)[0]], (data, value, key) => {
    data[key] = (typeof value === 'string' ? lang.ITEM_INFORMATION[value].name[locale] : value)
    return data
  }, {})
  console.log('replacers', item.data.Category, replacers)

  return replaceTemplate(
    lang[item.id].description[locale],
    replacers
  )
}

function replaceTemplate(templStr, replacers) {
  const outputStr = (templStr.match(/\$([a-zA-Z]+)/g) || [])
    .reduce((out, match) => out.replace(match, replacers[match.substring(1)]), templStr);
 return outputStr;
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