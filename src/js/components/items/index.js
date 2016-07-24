import React from 'react';

import ItemList from "./item-list";
import items from "dex/items";

export default () => (
  <div className="items">
    <h2 className="u-seperator">
      <span className="u-seperator__text">Items</span>
    </h2>
    <p>Items help you catch pokes better. Probs.</p>
    <ItemList items={items} />
  </div>
);
