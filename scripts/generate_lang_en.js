import GameAssets from "../assets/master.json";

function getEnName(type, id) {
  if (type === "TypeEffective") { // POKEMON_TYPE_BUG
    return id.match(/POKEMON_TYPE_(.*)"/)[1].toLowerCase();
  }
  if (type === "Item") { // ITEM_X_MIRACLE
    return id.match(/ITEM_(.*)"$/)[1].replace(/_/g, " ").toLowerCase();
  }
  if (type === "Badge") { // BADGE_TYPE_ICE
    return id.match(/BADGE_(.*)"$/)[1].replace(/_/g, " ").toLowerCase();
  }
  if (type === "Pokemon") { // V0001_POKEMON_BULBASAUR
    return id.match(/V.{4}_POKEMON_(.*)"$/)[1].replace(/_/g, " ").toLowerCase()
  }
  if (type === "Move") { // V0013_MOVE_WRAP
    return id.match(/V.{4}_MOVE_(.*)"$/)[1].replace(/_/g, " ").toLowerCase();
  }
  return null;
}

const lang = GameAssets.Items.reduce((lang, item) => {
  const keys = Object.keys(item);
  const assetType = keys.find(k => k !== "TemplateId");
  const assetTypeKey = assetType.toLowerCase();;
  if (!lang[assetTypeKey]) lang[assetTypeKey] = {};
  try {
    lang[assetTypeKey] = Object.assign(lang[assetTypeKey], {
      [item.TemplateId.substring(1, item.TemplateId.length - 1)]: {
        en: {
          label: getEnName(assetType, item.TemplateId)
        }
      }
    });
  } catch (e) {
    console.error(`Failed on item`, item);
  }
  return lang;
}, {});

console.log(JSON.stringify(lang, null, 2));