import React from 'react';
import Move from './move';

export default (props = { moves: [], stat: "data.Power", expanded: false }) => (

  <ul className={ (props.expanded && "move-list--expanded") ||  "move-list" }>
    {
      props.moves.map((move, i) => (
        <Move index={ i } key={ move.numericId } move={ move } stat={ props.stat } expanded={ props.expanded }/>
      ))
    }
  </ul>
);