import _ from "lodash";
import $ from "jquery";

import pokedex from "./dex/pokedex";
import pokemonTemplate from "./pokemon.template";
import popoverTemplate from "./popover/template";

const $pokemonList = $(".pokemon-list");

mixpanel.track("Viewed Pokemon list");
const html = pokedex.map(poke => pokemonTemplate(poke));
html.forEach(item => {
  const li = document.createElement("li");
  li.innerHTML = item;
  $pokemonList.append(li);
});

$pokemonList.on("click", ".pokemon", (e) => {
  const id = $(e.currentTarget).data("id");
  const poke = pokedex.find(p => p.id === id);
  mixpanel.track("Opened Pokemon", {
    id: poke.id,
    name: poke.name
  });
  $(popoverTemplate(poke)).appendTo("body");
  $("body").css("overflow", "hidden");
});

$("body").on("click", ".js-close", () => {
  mixpanel.track("Closed Pokemon");
  $(".pokemon-popover, .overlay").remove();
  $("body").css("overflow", "auto");
})