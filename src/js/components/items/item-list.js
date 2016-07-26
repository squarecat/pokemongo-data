import React from 'react';
import Item from './item';

export default (props = { items: [] }) => (
  <ul className="item-list">
    {
      props.items.map(i => (
        <Item key={ i.id } item={ i } />
      ))
    }
  </ul>
);
