import React from "react";
import MoveList from "./move-list";
import moves from "dex/movedex";
import lang from "json!../../../../assets/lang.json";

export default (props) => (
  <div data-has-overlay={ props.children ? true : false } >
    <div className="movedex">
      <h2 className="u-seperator">
        <span className="u-seperator__text">Basic Attacks</span>
      </h2>
      <p>Basic attacks are fast and replenish energy.</p>
      <MoveList moves={ moves.filter(m => m.id.match("FAST")) } expanded={ props.route && props.route.path === "movedex" } />

      <h2 className="u-seperator">
        <span className="u-seperator__text">Special Attacks</span>
      </h2>
      <p>Special attacks tend to be slower, more powerful, and have a chance to critical hit. They consume energy.</p>
      <MoveList moves={ moves.filter(m => !m.id.match("FAST")) } expanded={ props.route && props.route.path === "movedex" } />
    </div>
    { props.children }
  </div>
)
