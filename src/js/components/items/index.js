import React from 'react';

import ItemList from "./item-list";
import groupedItems from "dex/items";

export default () => (
  <div className="items">
    {
      _.map(groupedItems, (items, key) => (
        <div key={key} className="items__group">
          <h2 className="u-seperator">
            <span className="u-seperator__text u-capitalize">{key}</span>
          </h2>
          <ItemList items={ items } />
        </div>
      ))
    }
  </div>
);
