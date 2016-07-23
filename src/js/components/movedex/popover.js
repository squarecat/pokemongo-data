import React from "react";
import { Link } from 'react-router';

import pokemon, { getSpriteUrl } from "dex/pokedex";
import moves, { doesLearn } from "dex/movedex";
import { transformType } from "dex/typedex";

import Move from "./move";

export default React.createClass({
  render() {
    const move = moves.find(m => m.numericId === parseInt(this.props.params.id, 10));
    ga('send', {
      hitType: 'event',
      eventCategory: 'movedex',
      eventAction: 'open-move',
      eventValue: poke.name
    });
    return (
      <div className="pokemon-popover">
        <div className="pokemon-popover__body pokemon-popover__body--move">
          <div className="js-close pokemon-popover__close">
            <Link to="/movedex">X</Link>
          </div>
          <div className="pokemon-popover__name">
            <span className="u-title">
              { parseName(move) }
            </span>
            <span className="u-subtitle">
              { transformType(move.data.Type) }
            </span>
            <div className="move__charge">
              { energyUsage(move.data.EnergyDelta) }
            </div>
          </div>

          <ul className="u-horizonal-list u-stats-row">
            <li className="u-stat">
              <span className="u-stat-value">
                { move.data.Power || 0 }
              </span>
              <span className="u-stat-label">
                Power
              </span>
            </li>
            <li className="u-stat">
              <span className="u-stat-value">
                { move.data.CriticalChance ? (move.data.CriticalChance * 100) : 0 }%
              </span>
              <span className="u-stat-label">
                Critical Chance
              </span>
            </li>
            <li className="u-stat">
              <span className="u-stat-value">
                { move.data.AccuracyChance * 100 }%
              </span>
              <span className="u-stat-label">
                Accuracy
              </span>
            </li>
          </ul>
          <ul className="u-horizonal-list u-stats-row">
            <li className="u-stat">
              <span className="u-stat-value">
                { move.data.DurationMs / 1000 }<span className="u-lowercase u-muted">s</span>
              </span>
              <span className="u-stat-label">
                Duration
              </span>
            </li>
            <li className="u-stat">
              <span className="u-stat-value">
                { move.data.EnergyDelta }
              </span>
              <span className="u-stat-label">
                Energy Usage
              </span>
            </li>
            <li className="u-stat">
              <span className="u-stat-value">
                { `${round(move.dps)} (${ round(move.dps * 1.25)})` }
              </span>
              <span className="u-stat-label">
                DPS (STAB)
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
            <li id={ poke.id }>
               <Link to={ `/pokedex/${poke.dexNumber}` }>
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
  if (move.data.HealScalar) {
    return (
      `Replenishes HP by ${move.data.HealScalar * 100}%`
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
  return move.data.VfxName.split("_").join(" ").substring(1, move.data.VfxName.length - 1).replace("fast", "")
}