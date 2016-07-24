import React from 'react';
import { Link } from 'react-router';

export default (poke) => (
  <li key={ poke.id }>
    <Link to={ pokeLink(poke) }>
      <div
        className="pokemon"
        id={ poke.id }
        data-id={ poke.id }
        data-name={ poke.name }
      >
        <div className="pokemon__sprite">
          <img className="u-sprite" src= { poke.spriteUrl } />
        </div>
        <div className="pokemon__name">
          <span className="u-title">
            { poke.name }
          </span>
        </div>
      </div>
    </Link>
  </li>
 );

function pokeLink(poke) {
  return `/pokedex/${poke.dexNumber}`;
}
