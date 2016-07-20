import GameAssets from "../assets/master.json";
import lang from "../assets/lang.js";

const normalizedAssets = GameAssets.Items.map(asset => {
  const keys = Object.keys(asset);
  const assetType = keys.find(k => k !== "TemplateId");
  const assetData = asset[assetType];

  if (assetType === "Move") {
    return Object.assign({
      name: lang.moves[assetData.UniqueId],
      type: lang.types[assetData.Type],
    }, Object.keys(assetData).map(key => ({[uncapitalize(key)]: assetData[key]})))
  }
}).filter(asset => asset);

function uncapitalize(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

console.log(normalizedAssets);