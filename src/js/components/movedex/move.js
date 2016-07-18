import React from "react";
import _ from "lodash";

import { transformType } from "dex/typedex";

export default (props) => (
  <li key={ props.move.id } className="u-move">
    <div className="move__details">
      <div className="move__name">{ name(props.move) }</div>
      <div className="move__type">{ transformType(props.move.data.Type) }</div>
    </div>
    <div className="move__charge">{ energyUsage(props.move.data.EnergyDelta) }</div>
    <div className="move__power">{ props.move.data.Power }</div>
  </li>
);

function name(move) {
  return move.data.VfxName.split("_").join(" ").substring(1, move.data.VfxName.length - 1).replace("fast", "")
}

function energyUsage(energy) {
  let num = Math.round(100 / Math.abs(energy));
  return _.times(num).map(() => (
    <span className={ "energy-usage " + (energy > 0 ? "energy-usage--replenish" : "") }></span>
  ));
}
