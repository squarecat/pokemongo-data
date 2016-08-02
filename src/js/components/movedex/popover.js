import React from "react";
import { Link } from 'react-router';

import pokemon, { getSpriteUrl } from "dex/pokedex";
import moves, { doesLearn, hasStab, calculateStab } from "dex/movedex";
import { transformType } from "dex/typedex";

import Move from "./move";

export default React.createClass({
  render() {
    document.getElementById("body").style.overflow = "hidden";
    const move = moves.find(m => m.id === this.props.params.id);
    ga('send', {
      hitType: 'event',
      eventCategory: 'movedex',
      eventAction: 'open-move',
      eventLabel: parseName(move),
      eventValue: move.id
    });
    return (
      <div className="pokemon-popover">
        <div className="pokemon-popover__body pokemon-popover__body--move">
          <div className="pokemon-popover__name u-capitalize">
            <span className="u-title">
              { parseName(move) }
            </span>
            <span className="u-subtitle">
              { transformType(move.pokemon_type) }
            </span>
            <div className="move__charge">
              { energyUsage(move.energy_delta) }
            </div>
          </div>

          <ul className="u-horizonal-list u-stats-row">
            <li className="u-stat">
              <span className="u-stat-value">
                { move.power || 0 }
              </span>
              <span className="u-stat-label">
                Power
              </span>
            </li>
            <li className="u-stat">
              <span className="u-stat-value">
                { Math.round(move.critical_chance ? (move.critical_chance * 100) : 0) }%
              </span>
              <span className="u-stat-label">
                Critical Chance
              </span>
            </li>
            <li className="u-stat">
              <span className="u-stat-value">
                { move.accuracy_chance * 100 }%
              </span>
              <span className="u-stat-label">
                Accuracy
              </span>
            </li>
          </ul>
          <ul className="u-horizonal-list u-stats-row">
            <li className="u-stat">
              <span className="u-stat-value">
                { move.duration_ms / 1000 }<span className="u-lowercase u-muted">s</span>
              </span>
              <span className="u-stat-label">
                Duration
              </span>
            </li>
            <li className="u-stat">
              <span className="u-stat-value">
                { move.energy_delta }
              </span>
              <span className="u-stat-label">
                Energy Usage
              </span>
            </li>
            <li className="u-stat">
              <span className="u-stat-value">
                { `${round(move.dps)} ${hasStab(move) ? `(${ calculateStab(move.dps) })` : "" }` }
              </span>
              <span className="u-stat-label">
                { `DPS ${hasStab(move) ? "(STAB)" : ""} ` }
              </span>
            </li>
          </ul>
          <div className="move__special-effects">
            <span className="u-stat-label">
              Special Effects
            </span>
            <p className="move__special-effects__text">
              { specialEffects(move) || "None" }
            </p>
          </div>

          <div className="move__learned-by">
            <span className="u-stat-label">
              Learned By
            </span>
            { learnedBy(move) }
          </div>
        </div>

        <div className="js-close pokemon-popover__close">
          <Link to="/movedex">
            <img src="assets/close.png" />
          </Link>
        </div>
      </div>
    )
  }
});

function learnedBy(move) {
  const learnedList = pokemon.filter(poke => doesLearn(poke, move))
  if (learnedList.length) {
    return (
      <ul className="u-pokemon-icon-list u-horizonal-list">
        {
          learnedList.map(poke => (
            <li id={ poke.id } key={ poke.id }>
               <Link to={ `/pokedex/${poke.dex_number}` }>
                  <img
                    className="u-sprite u-sprite--mini"
                    src={ getSpriteUrl(poke) }
                  />
                </Link>
            </li>
          ))
        }
      </ul>
    );
  }
  return (
    <p className="move__learned-by__text">
      No Pokémon learn this move
    </p>
  );
}

function round(num) {
  return Math.round(num * 10 ) / 10;
}
function specialEffects(move) {
  if (move.heal_scalar) {
    return (
      `Replenishes HP by ${move.heal_scalar * 100}%`
    )
  }
}

function energyUsage(energy) {
  let num = Math.round(100 / Math.abs(energy));
  return _.times(num).map((n, i) => (
    <span key={i} className={ "energy-usage " + (energy > 0 ? "energy-usage--replenish" : "") }></span>
  ));
}

function parseName(move) {
  return move.vfx_name.split("_").join(" ")
    .replace("fast", "");
}