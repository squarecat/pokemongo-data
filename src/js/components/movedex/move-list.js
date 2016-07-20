import React from 'react';
import Move from './move';

export default (props = { moves: [] }) => (
  <ul className={ (props.expanded && "move-list--expanded") ||  "move-list" }>
    {
      props.moves.map(move => (
        <Move key={ move.id } move={ move } expanded={ props.expanded }/>
      ))
    }
  </ul>
);