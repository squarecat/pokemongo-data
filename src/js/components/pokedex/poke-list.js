import React from 'react';
import Poke from './poke';

import { getSpriteUrl } from 'dex/pokedex'

export default (props = { pokemon: [] }) => (
  <ul className="pokemon-list">
    {
      props.pokemon.map(poke => (
        <Poke key={ poke.id } name={ poke.name } spriteUrl={ getSpriteUrl(poke) } dexNumber={ poke.dexNumber } onClick={ () => props.onClick(poke) } />
      ))
    }
  </ul>
);
