import React from "react";
import PokeList from "./poke-list";
import pokemon from "dex/pokedex";

export default (props) => (
  <div data-has-overlay={ props.children ? true : false } >
    <PokeList pokemon={ pokemon } />
    { props.children }
  </div>
)



