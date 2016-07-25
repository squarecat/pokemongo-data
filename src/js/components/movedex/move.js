import React from "react";
import _ from "lodash";
import { Link } from 'react-router';

import { sortableProps } from "dex/movedex";
import { transformType } from "dex/typedex";

export default (props) => (
  <li key={ props.move.id }>
    <Link to={ moveLink(props.move) }>
      <div className="u-move">
        <div className="move__details">
          <div className="u-title u-capitalize">
              { parseName(props.move) }
          </div>
          <div className="u-desc u-capitalize">
            { props.move.type }
          </div>
        </div>
        <div className="move__charge">
          { energyUsage(props.move.data.EnergyDelta) }
        </div>
          <div className="move__power">
            { getStat(props.stat, props.move) }
          </div>
      </div>
    </Link>
  </li>
);

function getStat(stat, move) {
  const value = _.get(move, stat)
  if (!value) return 0;
  if (_.isString(value)) {
    return "";
  }
  if (_.isNumber(value)) {
    const prop = sortableProps.find(sp => sp.value === stat);
    return prop && prop.transform ? prop.transform(value) : value;
  }
}

function round(num) {
  return Math.round(num * 10 ) / 10;
}

function moveLink(move) {
  return `/movedex/${move.numericId}`;
}

function parseName(move) {
  return move.data.VfxName.split("_").join(" ").substring(1, move.data.VfxName.length - 1).replace("fast", "")
}

function energyUsage(energy) {
  let num = Math.round(100 / Math.abs(energy));
  return _.times(num).map((n, i) => (
    <span key={i} className={ "energy-usage " + (energy > 0 ? "energy-usage--replenish" : "") }></span>
  ));
}