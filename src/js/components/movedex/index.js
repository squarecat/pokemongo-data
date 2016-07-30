import React from "react";
import _ from "lodash";

import MoveList from "./move-list";
import unsortedMoves, { sortableProps, sortMovesOnValue } from "dex/movedex";
import Sorter from "components/sorter";

import lang from "json!../../../../assets/lang/moves.json";
import locale from 'dex/locale';

export default React.createClass({
  componentWillMount() {
    this.setState({
      stat: window.app.defaultMovedexSort,
      overlay: false
    });
  },
  render() {
    const { children } = this.props;
    const { stat, overlay, stat: sortValue } = this.state;
    const moves = groupMoves(sortMovesOnValue(sortValue));
    return (
      <div data-has-overlay={ !!(children || overlay) } >
        { children }
        <div className="u-container">
          <p>{ lang.PAGE_DESCRIPTION.GENERAL[locale] }</p>
          <div className="movedex">
            <div className="movedex__basic">
              <h2 className="u-seperator">
                <span className="u-seperator__text">{ lang.PAGE_DESCRIPTION.BASIC.title[locale] }</span>
              </h2>
              <p>{ lang.PAGE_DESCRIPTION.BASIC.description[locale] }</p>
              <MoveList moves={ moves.fast } stat={ stat } />
            </div>

            <div className="movedex__special">
              <h2 className="u-seperator">
                <span className="u-seperator__text">{ lang.PAGE_DESCRIPTION.SPECIAL.title[locale] }</span>
              </h2>
              <p>{ lang.PAGE_DESCRIPTION.SPECIAL.description[locale] }</p>
              <MoveList moves={ moves.special } stat={ stat } />
            </div>

            <Sorter
              onCloseSort={ () => this.onCloseSort() }
              onOpenSort={ () => this.onOpenSort() }
              filterList={ sortableProps }
              onSortChange={ (sortValue) => this.onSortChange(sortValue) }
              currentSort={ sortValue }
            />
          </div>
        </div>
      </div>
    );
  },

  onCloseSort() {
    this.setState({
      overlay: false
    });
  },

  onOpenSort() {
    this.setState({
      overlay: true
    });
  },

  onSortChange(sortValue) {
    window.app.defaultMovedexSort = sortValue;
    const sortedMoves = sortMovesOnValue(sortValue);
    this.setState({
      moves: groupMoves(sortedMoves),
      stat: sortValue
    });
  }
})

function groupMoves(moves) {
  return _.groupBy(moves, m => m.id.match("FAST") ? "fast" : "special");
}