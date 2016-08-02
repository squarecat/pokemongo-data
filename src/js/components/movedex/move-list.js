import React from 'react';
import Move from './move';

export default (props = { moves: [], stat: "power", expanded: false }) => (

  <ul className={ (props.expanded && "move-list--expanded") ||  "move-list" }>
    {
      props.moves.map((move, i) => (
        <Move index={ i } key={ move.id } move={ move } stat={ props.stat } expanded={ props.expanded }/>
      ))
    }
  </ul>
);