import React from 'react';
import Item from './item';

export default (props = { items: [] }) => (
  <ul className="item-list">
    {
      props.items.map(item => (
        <Item key={ item.id } item={ item } />
      ))
    }
  </ul>
);
