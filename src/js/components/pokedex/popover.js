import React from "react";
import { Link } from 'react-router';

import Move from "../movedex/move";
import pokemon, { getEvoChain, getSpriteUrl } from "dex/pokedex";
import { getMoveSet, getSpecialMoveSet } from "dex/movedex";
import { transformType } from "dex/typedex";

export default React.createClass({
  render() {
    const poke = pokemon.find(poke => poke.dexNumber === this.props.params.id);
    return <div className="pokemon-popover">
      <div className="pokemon-popover__sprite">
        <img
          className="u-sprite"
          src={ getSpriteUrl(poke) }
        />
      </div>

      <div className="pokemon-popover__body">
        <div className="js-close pokemon-popover__close">
          <Link to="/pokedex">X</Link>
        </div>
        <div className="pokemon-popover__name">
          <span className="u-title">{ poke.name }</span>
        </div>


        <div className="pokemon-popover__basic-stats">
          <ul className="u-horizonal-list">
            <li className="pokemon-popover__basic-stat">
              <span className="pokemon-popover__basic-stat-value">
                { type(poke) }
              </span>
              <span className="pokemon-popover__basic-stat-label">Type</span>
            </li>
            <li className="pokemon-popover__basic-stat">
              <span className="pokemon-popover__basic-stat-value">
                { poke.data.PokedexWeightKg }kg
              </span>
              <span className="pokemon-popover__basic-stat-label">Avg Weight</span>
            </li>
            <li className="pokemon-popover__basic-stat">
              <span className="pokemon-popover__basic-stat-value">
                { poke.data.PokedexHeightM }m
              </span>
              <span className="pokemon-popover__basic-stat-label">Avg Height</span>
            </li>
          </ul>
        </div>

        <div className="pokemon-popover__stats">
          <ul className="u-horizonal-list">
            <li className="pokemon-popover__basic-stat">
              <span className="pokemon-popover__basic-stat-value">
                { poke.data.Stats.BaseAttack }
              </span>
              <span className="pokemon-popover__basic-stat-label">Base Attack</span>
            </li>
            <li className="pokemon-popover__basic-stat">
              <span className="pokemon-popover__basic-stat-value">
                { poke.data.Stats.BaseDefense }
              </span>
              <span className="pokemon-popover__basic-stat-label">Base Defence</span>
            </li>
            <li className="pokemon-popover__basic-stat">
              <span className="pokemon-popover__basic-stat-value">
                { poke.data.Stats.BaseStamina }
              </span>
              <span className="pokemon-popover__basic-stat-label">Base Stamina</span>
            </li>
          </ul>
        </div>

        <div className="pokemon-popover__evolutions">
          <ul className="u-horizonal-list">
            {
              getEvoChain(poke).map(evo => (
                <li data-candy={ evo.data.CandyToEvolve } key={ evo.id } >
                  <Link to={ `/pokedex/${evo.dexNumber}` }>
                    <img
                      className="u-sprite"
                      data-scale={ evo.data.ModelScale }
                      src={ getSpriteUrl(evo) }
                    />
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="pokemon-popover__moveset">
          <ul>
            {
              getMoveSet(poke).map(move => (
                <Move move={ move } />
              ))
            }
            {
              getSpecialMoveSet(poke).map(move => (
                <Move move={ move } />
              ))
            }
          </ul>
        </div>

        <div className="pokemon-popover__encounter">
          <ul>
            <li className="pokemon-popover__basic-stat">
              <span className="pokemon-popover__basic-stat-value">{ poke.data.Encounter.BaseCaptureRate || 0 }</span>
              <span className="pokemon-popover__basic-stat-label">Base Capture rate</span>
            </li>
            <li className="pokemon-popover__basic-stat">
              <span className="pokemon-popover__basic-stat-value">{ Math.round(poke.data.Encounter.BaseFleeRate * 100) }</span>
              <span className="pokemon-popover__basic-stat-label">Flee chance</span>
            </li>
            <li className="pokemon-popover__basic-stat">
              <span className="pokemon-popover__basic-stat-value">{ poke.data.Encounter.MovementTimerS } secs</span>
              <span className="pokemon-popover__basic-stat-label">Dodge interval</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  }
});

function type(poke) {
  return poke.data.Type2 ? `${transformType(poke.data.Type1)}/${transformType(poke.data.Type2)}` : transformType(poke.data.Type1);
}

function energyUsage(energy) {
  let out = "";
  let num = Math.round(100 / Math.abs(energy));
  while(num > 0) {
    out = out + `<span class="energy-usage ${energy > 0 ? "energy-usage--replenish" : ""}"></span>`;
    num--;
  }
  return out;
}
