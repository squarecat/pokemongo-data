import React from 'react';

import ItemList from "./item-list";
import groupedItems from "dex/items";

export default () => (
  <div className="items">
    <div className="associates"
      dangerouslySetInnerHTML={{__html: '<a rel="nofollow" href="https://www.amazon.co.uk/gp/product/B00DTSH1JS/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B00DTSH1JS&linkCode=as2&tag=squarecatio-21"><img border="0" src="http://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00DTSH1JS&Format=_SL110_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=squarecatio-21" ></a><img src="http://ir-uk.amazon-adsystem.com/e/ir?t=squarecatio-21&l=as2&o=2&a=B00DTSH1JS" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />'}}
    >
    </div>
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
