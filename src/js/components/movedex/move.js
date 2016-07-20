import React from "react";
import _ from "lodash";
import { Link } from 'react-router';

import { transformType } from "dex/typedex";

export default (props) => (
  <li key={ props.move.id }>
    <Link to={ moveLink(props.move) }>
      <div className="u-move">
        <div className="move__details">
          <div className="move__name">
              { parseName(props.move) }
          </div>
          <div className="move__type">
            { transformType(props.move.data.Type) }
          </div>
        </div>
        <div className="move__charge">
          { energyUsage(props.move.data.EnergyDelta) }
        </div>
          <div className="move__power">
            { props.move.data.Power || 0 }
          </div>
      </div>
    </Link>
  </li>
);

function moveLink(move) {
  return `/movedex/${move.numericId}`;
}

function parseName(move) {
  return move.data.VfxName.split("_").join(" ").substring(1, move.data.VfxName.length - 1).replace("fast", "")
}

function energyUsage(energy) {
  let num = Math.round(100 / Math.abs(energy));
  return _.times(num).map(() => (
    <span className={ "energy-usage " + (energy > 0 ? "energy-usage--replenish" : "") }></span>
  ));
}