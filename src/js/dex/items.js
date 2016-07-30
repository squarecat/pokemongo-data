import _ from "lodash";

import lang from 'lang/items'
import ads from "affiliate_ads";

import locale from './locale'
import data from "./grouped";
const { Item } = data;

const overwriteSprites = {
  "ITEM_BLUK_BERRY": "unknown_berry",
  "ITEM_NANAB_BERRY": "unknown_berry",
  "ITEM_PINAP_BERRY": "unknown_berry",
  "ITEM_WEPAR_BERRY": "unknown_berry"
}
const itemsWithoutSprites = [
  "ITEM_BLUK_BERRY",
  "ITEM_NANAB_BERRY",
  "ITEM_PINAP_BERRY",
  "ITEM_TROY_DISK",
  "ITEM_X_ATTACK",
  "ITEM_X_DEFENSE",
  "ITEM_X_MIRACLE"
];

const commonKeys = [
  "Category",
  "ItemType",
  "UniqueId"
];

function getBasicItemInfo(item) {
  return {
    id: item.id,
    name: lang[item.id].name[locale],
    desc: getDescription(item),
    category: lang.CATEGORIES[item.data.Category].name[locale]
  };
}

function getDescription(item) {
  if (!item.data) return {};
  const additionalInfo = _.omit(item.data, commonKeys);
  const additionalInfoData = additionalInfo[Object.keys(additionalInfo)[0]];

  const replacers = _.reduce(additionalInfoData, (data, value, key) => {
    return Object.assign(data, {
      [key]: lookupDescription(value)
    });
  }, {});

  const desc = lang[item.id].description[locale];

  return _.isFunction(desc) ? desc(replacers) : desc;
}

function lookupDescription(value) {
  return (typeof value === 'string' ? lang.ITEM_INFORMATION[value].name[locale] : value);
}

const items = _.chain(Item)
  .sortBy(item => lang[item.id].order)
  .map(item => {
    return Object.assign(item, getBasicItemInfo(item));
  })
  .concat(ads)
  .sortBy("category")
  .groupBy("category")
  .value();

export function getSpriteUrl(item) {
  if (item.imgUrl) return item.imgUrl;
  if (overwriteSprites[item.id]) {
    return `./assets/items/${overwriteSprites[item.id]}.png`;
  }
  if (!item.id || itemsWithoutSprites.includes(item.id)) {
    return;
  }
  const spriteName = item.id.match(/ITEM_(.*)$/)[1]
    .replace(/_/g, "")
    .toLowerCase();
  return `./assets/items/${spriteName}.png`;
}

console.log('Items', items);

export default items;