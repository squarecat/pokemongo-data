import React from "react";

import Sorter from "components/sorter";
import PokeList from "./poke-list";
import pokemonList, { sortableProps, sortPokemonOnValue } from "dex/pokedex";

import lang from "json!../../../../assets/lang/pokemon.json";
import locale from 'dex/locale';

export default React.createClass({
  componentWillMount() {
    this.setState({
      stat: window.app.defaultPokedexSort,
      overlay: false
    });
  },
  render() {
    const { children } = this.props;
    const { stat, overlay, stat: sortValue } = this.state;
    return (
      <div data-has-overlay={ !!(children || overlay) } >
        { children }
        <div className="u-container">
          <p>{ lang.PAGE_DESCRIPTION.GENERAL[locale] }</p>
          <div className="pokedex">
            <PokeList pokemon={ sortPokemonOnValue(sortValue) } />

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
    )
  },
  onSortChange(sortValue) {
    window.app.defaultPokedexSort = sortValue;
    this.setState({
      stat: sortValue
    });
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
  }
});
