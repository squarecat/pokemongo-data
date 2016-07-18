import React from 'react';
import Poke from './poke';

export default (props = { pokemon: [] }) => (
  <ul className="pokemon-list">
    {
      props.pokemon.map(poke => (
        <Poke key={ poke.id } name={ poke.name } spriteUrl={ imageUrl(poke) } dexNumber={ poke.dexNumber } onClick={ () => props.onClick(poke) } />
      ))
    }
  </ul>
);

function imageUrl(poke) {
  return `./assets/sprites/${poke.dexNumber}.png`;
}
