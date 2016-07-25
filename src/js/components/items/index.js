import React from 'react';

import ItemList from "./item-list";
import items from "dex/items";

export default () => (
  <div className="items">
    <ItemList items={items} />
  </div>
);
