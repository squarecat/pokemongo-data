import { transformType, getEvoChain, getMoveSet, getSpecialMoveSet } from "../variables";

export default (poke) => `
  <div class="pokemon-popover">
    <div class="pokemon-popover__sprite">
      <img class="u-sprite" src="./assets/sprites/${poke.dexNumber}.png" />
    </div>

    <div class="pokemon-popover__body">
      <div class="js-close pokemon-popover__close">X</div>
      <div class="pokemon-popover__name">
        <span class="u-title">${poke.name}</span>
      </div>


      <div class="pokemon-popover__basic-stats">
        <ul class="u-horizonal-list">
          <li class="pokemon-popover__basic-stat">
            <span class="pokemon-popover__basic-stat-value">${poke.data.Type2 ? `${transformType(poke.data.Type1)}/${transformType(poke.data.Type2)}` : transformType(poke.data.Type1)}</span>
            <span class="pokemon-popover__basic-stat-label">Type</span>
          </li>
          <li class="pokemon-popover__basic-stat">
            <span class="pokemon-popover__basic-stat-value">${poke.data.PokedexWeightKg}kg</span>
            <span class="pokemon-popover__basic-stat-label">Avg Weight</span>
          </li>
          <li class="pokemon-popover__basic-stat">
            <span class="pokemon-popover__basic-stat-value">${poke.data.PokedexHeightM}m</span>
            <span class="pokemon-popover__basic-stat-label">Avg Height</span>
          </li>
        </ul>
      </div>

      <div class="pokemon-popover__stats">
        <ul class="u-horizonal-list">
          <li class="pokemon-popover__basic-stat">
            <span class="pokemon-popover__basic-stat-value">${poke.data.Stats.BaseAttack}</span>
            <span class="pokemon-popover__basic-stat-label">Base Attack</span>
          </li>
          <li class="pokemon-popover__basic-stat">
            <span class="pokemon-popover__basic-stat-value">${poke.data.Stats.BaseDefense}</span>
            <span class="pokemon-popover__basic-stat-label">Base Defence</span>
          </li>
          <li class="pokemon-popover__basic-stat">
            <span class="pokemon-popover__basic-stat-value">${poke.data.Stats.BaseStamina}</span>
            <span class="pokemon-popover__basic-stat-label">Base Stamina</span>
          </li>
        </ul>
      </div>

      <div class="pokemon-popover__evolutions">
        <ul class="u-horizonal-list">
          ${getEvoChain(poke).map(evo => `
            <li ${evo.data.CandyToEvolve ? `data-candy="${evo.data.CandyToEvolve}"` : ""}>
              <img class="u-sprite" data-scale="${evo.data.ModelScale}%" src="./assets/sprites/${evo.dexNumber}.png" />
            </li>
          `).join("")}
        </ul>
      </div>

      <div class="pokemon-popover__moveset">
        <ul>
          ${getMoveSet(poke).map(move => `
            <li class="u-move">
              <div class="move__details">
                <div class="move__name">${move.data.VfxName.split("_").join(" ").substring(1, move.data.VfxName.length - 1).replace("fast", "")}</div>
                <div class="move__type">${transformType(move.data.Type)}</div>
              </div>
              <div class="move__charge">${energyUsage(move.data.EnergyDelta)}</div>
              <div class="move__power">${move.data.Power}</div>
            </li>
          `).join("")}
          ${getSpecialMoveSet(poke).map(move => `
            <li class="u-move">
              <div class="move__details">
                <div class="move__name">${move.data.VfxName.split("_").join(" ").substring(1, move.data.VfxName.length - 1).replace("fast", "")}</div>
                <div class="move__type">${transformType(move.data.Type)}</div>
              </div>
              <div class="move__charge">${energyUsage(move.data.EnergyDelta)}</div>
              <div class="move__power">${move.data.Power}</div>
            </li>
          `).join("")}
        </ul>
      </div>

      <div class="pokemon-popover__encounter">
        <ul>
          <li class="pokemon-popover__basic-stat">
            <span class="pokemon-popover__basic-stat-value">${poke.data.Encounter.BaseCaptureRate || 0}</span>
            <span class="pokemon-popover__basic-stat-label">Base Capture rate</span>
          </li>
          <li class="pokemon-popover__basic-stat">
            <span class="pokemon-popover__basic-stat-value">${Math.round(poke.data.Encounter.BaseFleeRate * 100)}%</span>
            <span class="pokemon-popover__basic-stat-label">Flee chance</span>
          </li>
          <li class="pokemon-popover__basic-stat">
            <span class="pokemon-popover__basic-stat-value">${poke.data.Encounter.MovementTimerS} secs</span>
            <span class="pokemon-popover__basic-stat-label">Dodge interval</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="overlay"></div>
`;

function energyUsage(energy) {
  let out = "";
  let num = Math.round(100 / Math.abs(energy));
  while(num > 0) {
    out = out + `<span class="energy-usage ${energy > 0 ? "energy-usage--replenish" : ""}"></span>`;
    num--;
  }
  return out;
}
