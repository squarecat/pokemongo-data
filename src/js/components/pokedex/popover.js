import React from "react";
import { Link } from 'react-router';

import Move from "../movedex/move";
import pokemon, { getEvoChain, getSpriteUrl } from "dex/pokedex";
import { getMoveSet, getSpecialMoveSet } from "dex/movedex";
import { transformType } from "dex/typedex";

export default React.createClass({
  render() {
    const poke = pokemon.find(poke => poke.dex_number === this.props.params.id);
    ga('send', {
      hitType: 'event',
      eventCategory: 'pokedex',
      eventAction: 'open-pokemon',
      eventLabel: poke.name,
      eventValue: poke.dexNumber
    });
    return <div className="pokemon-popover">
      <div className="pokemon-popover__sprite">
        <img
          className="u-sprite"
          src={ getSpriteUrl(poke) }
        />
      </div>

      <div className="pokemon-popover__body">
        <div className="pokemon-popover__name u-capitalize">
          <span className="u-title">{ poke.name }</span>
        </div>


        <ul className="u-horizonal-list u-stats-row">
          <li className="u-stat">
            <span className="u-stat-value">
              { type(poke) }
            </span>
            <span className="u-stat-label">Type</span>
          </li>
          <li className="u-stat">
            <span className="u-stat-value">
              { (poke.pokedex_weight_kg).toFixed(1) }kg
            </span>
            <span className="u-stat-label">Avg Weight</span>
          </li>
          <li className="u-stat">
            <span className="u-stat-value">
              { (poke.pokedex_height_m).toFixed(2) }m
            </span>
            <span className="u-stat-label">Avg Height</span>
          </li>
        </ul>

        <ul className="u-horizonal-list u-stats-row">
          <li className="u-stat">
            <span className="u-stat-value">
              { poke.stats.base_attack }
            </span>
            <span className="u-stat-label">Base Attack</span>
          </li>
          <li className="u-stat">
            <span className="u-stat-value">
              { poke.stats.base_defense }
            </span>
            <span className="u-stat-label">Base Defence</span>
          </li>
          <li className="u-stat">
            <span className="u-stat-value">
              { poke.stats.base_stamina }
            </span>
            <span className="u-stat-label">Base Stamina</span>
          </li>
        </ul>

        <div className="pokemon-popover__evolutions">
          <ul className="u-horizonal-list">
            {
              getEvoChain(poke).map(evo => (
                <li data-candy={ evo.candy_to_evolve } key={ evo.id } >
                  <Link to={ `/pokedex/${evo.dex_number}` }>
                    <img
                      className="u-sprite"
                      data-scale={ evo.model_scale }
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
                <Move key={ move.id } move={ move } stat={ "power" } />
              ))
            }
            {
              getSpecialMoveSet(poke).map(move => (
                <Move key={ move.id } move={ move } stat={ "power" } />
              ))
            }
          </ul>
        </div>

        <ul className="pokemon-popover__encounter u-stats-row">
          <li className="u-stat">
            <span className="u-stat-value">{ (poke.encounter.base_capture_rate || 0).toFixed(2) }</span>
            <span className="u-stat-label">Base Capture rate</span>
          </li>
          <li className="u-stat">
            <span className="u-stat-value">{ Math.round(poke.encounter.base_flee_rate * 100) }%</span>
            <span className="u-stat-label">Flee chance</span>
          </li>
          <li className="u-stat">
            <span className="u-stat-value">{ poke.encounter.movement_timer_s } secs</span>
            <span className="u-stat-label">Dodge interval</span>
          </li>
        </ul>
      </div>
      <div className="js-close pokemon-popover__close">
        <Link to="/pokedex">
          <img src="assets/close.png" />
        </Link>
      </div>
    </div>
  }
});

function precision(num, points = 2) {
  return num.toFixed(points);
}

function type(poke) {
  return poke.type_2 ? `${transformType(poke.type)}/${transformType(poke.type_2)}` : transformType(poke.type);
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
