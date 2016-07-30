import React from 'react';
import Item from './item';

export default (props = { items: [] }) => (
  <ul className="items__list">
    {
      props.items.map(item => (
        <Item key={ item.id || item.name } item={ item } />
      ))
    }
  </ul>
);
