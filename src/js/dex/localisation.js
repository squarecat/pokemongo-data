import lang from "json!../../../assets/lang.json";

export function localizeString(type, str) {
  if (lang[type]) {
    return lang[type][str];
  }
  return null;
}