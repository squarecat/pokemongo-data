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
    desc: lang[item.id].description[locale],
    category: lang.CATEGORIES[item.data.Category].name[locale],
    info: getAdditionalInfo(item, item.data.Category)
  }
}

function getAdditionalInfo(item, category) {
  if (!item.data) return
  const extraDataObject = _.omit(item.data, commonKeys)
  const extraDataArray = _.map(extraDataObject[Object.keys(extraDataObject)[0]], (value, key) => {
    return getItemInfoString(key, value, category)
  })
  return extraDataArray
}

function getItemInfoString(name, value, category) {
  const info = lang.CATEGORIES[category].info[name].name[locale]
  return populateTemplate(info, { [name]: value })
}

function populateTemplate(template, templateValues) {
  let templ
  Object.keys(templateValues).forEach(key => {
    templ = template.replace(`<${key}>`, templateValues[key])
  })
  return templ
}

function getItemInfo(name, value, category) {
  return {
    name: lang.CATEGORIES[category].info[name].name[locale],
    value: typeof value === 'string' ? lang.ITEM_INFORMATION[value].name[locale] : value
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