import React from 'react';
import { Link } from 'react-router';

import { getSpriteUrl } from 'dex/pokedex'

export default (props) => (
  <li key={ props.item.id }>
    <div
      className="item u-horizonal-list"
      id={ props.item.id }
      data-id={ props.item.id }
      data-name={ props.item.name }
    >
      <div className="item__sprite">
        <img className="u-sprite" src= { getSpriteUrl(props.item) } />
      </div>
      <div className="item__details">
        <div className="item__name">
          <span className="u-title u-capitalize">
            { props.item.name }
          </span>
        </div>
        <div className="u-desc u-capitalize">
          <span>
            { props.item.desc }
          </span>
        </div>
      </div>
    </div>
  </li>
 );
