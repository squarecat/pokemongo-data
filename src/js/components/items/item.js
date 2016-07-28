import React from 'react';
import { Link } from 'react-router';

import { getSpriteUrl } from 'dex/items'

export default (props) => (
  <li key={ props.item.id }>
    <div
      className="item u-horizonal-list"
      id={ props.item.id }
      data-id={ props.item.id }
      data-name={ props.item.name }
    >
      <div className="item__sprite-wrapper">
        <img className="item__sprite" src={ getSpriteUrl(props.item) } />
      </div>
      <div className="item__details">
        <div className="item__name">
          <span className="u-title u-capitalize">
            { props.item.name }
          </span>
        </div>
        <div className="u-desc">
          <span>
            { props.item.desc }
          </span>
        </div>
      </div>
    </div>
  </li>
 );
