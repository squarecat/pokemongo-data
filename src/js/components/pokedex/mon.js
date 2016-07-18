import React from 'react';

export default (poke) => (
  <li>
    <div
      className="pokemon"
      id={ poke.id }
      data-id={ poke.id }
      data-name={ poke.name }
    >
      <div className="pokemon__sprite">
        <img className="u-sprite" src= { imageUrl(poke) } />
      </div>
      <div className="pokemon__name">
        <span className="u-title">
          { poke.name }
        </span>
      </div>
    </div>
  </li>
 );

function imageUrl(poke) {
  return `./assets/sprites/${poke.dexNumber}.png`;
}