export default (poke) => `
  <div class="pokemon" data-id="${poke.id}" data-name="${poke.name}" data-id="${poke.id}">
    <div class="pokemon__sprite">
      <img class="u-sprite" src="./assets/sprites/${poke.dexNumber}.png" />
    </div>
    <div class="pokemon__name">
      <span class="u-title">${poke.name}</span>
    </div>
  </div>
`;
