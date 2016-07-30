import React from 'react';
import { Link } from 'react-router';
import FaExternalLink from 'react-icons/fa/external-link';

import { getSpriteUrl } from 'dex/items'

export default React.createClass({
  render() {
    const { item } = this.props;
    track({
      eventAction: 'show-items'
    });

    const Item = (
      <div
        className="item u-horizonal-list"
        id={ item.id }
        data-id={ item.id }
        data-name={ item.name }
      >
        <div className="item__sprite-wrapper">
          <img className="item__sprite" src={ getSpriteUrl(item) } />
        </div>
        <div className="item__details">
          <div className="item__name">
            <span className="u-title u-capitalize">
              { item.name }
            </span>
            { item.linkTo && <FaExternalLink />}
          </div>
          <div className="u-desc">
            <span>
              { item.desc }
            </span>
          </div>
        </div>
      </div>
    );

    if (item.linkTo) {
      return (
        <li>
          <img
            src={ item.trackUrl }
            style={{ width: "1px", height: "1px" }}
          />
            <a
              href={ item.linkTo }
              onClick= {
                () => track({
                  eventAction: 'amazon-item',
                  eventLabel: item.name
                })
              }
            >
            { Item }
          </a>
        </li>
      );
    }

    return (
      <li>
        { Item }
      </li>
    )
  }
});

function track(opts) {
  ga('send', Object.assign({
    hitType: 'event',
    eventCategory: 'items'
  }, opts));
}
