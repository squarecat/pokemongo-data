import _ from "lodash";

import lang from 'lang/items'
import affilateData from "affiliate_ads";

import locale from './locale'
import { item as rawItemList } from "./grouped";
// const { Item } = data;

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
  "category",
  "item_type",
  "id"
];

function getBasicItemInfo(item) {
  return {
    id: item.id,
    name: lang[item.id].name[locale] || item.name,
    desc: getDescription(item),
    category: lang.CATEGORIES[item.category].name[locale],
    catOrder: lang.CATEGORIES[item.category].order
  };
}

function getDescription(item) {
  const additionalInfo = _.omit(item, commonKeys);
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

const ads = affilateData
  .map(ad => {
    return Object.assign(ad, {
      category: lang.CATEGORIES[ad.category].name[locale],
      catOrder: lang.CATEGORIES[ad.category].order,
    });
  });

const items = _.chain(rawItemList)
  .sortBy(item => lang[item.id].order)
  .map(item => {
    return Object.assign(item, getBasicItemInfo(item));
  })
  .concat(ads)
  .sortBy("catOrder")
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