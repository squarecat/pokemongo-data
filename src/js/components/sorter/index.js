import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  componentWillMount() {
    this.setState({
      isExpanded: false
    });
  },

  expand() {
    document.getElementById("body").style.overflow = "hidden";
    if (this.state.isExpanded) {
      return this.close()
    }
    this.props.onOpenSort();
    this.setState({
      isExpanded: true
    });
  },

  close() {
    document.getElementById("body").style.overflow = "auto";
    this.props.onCloseSort();
    this.setState({
      isExpanded: false
    });
  },

  onClick(filter) {
    this.props.onSortChange(filter.value);
    ga('send', {
      hitType: 'event',
      eventCategory: 'sorter',
      eventAction: 'change-sort',
      eventValue: filter.value
    });
    this.close();
  },

  render() {
    const { filterList, onSortChange, currentSort } = this.props;
    const { isExpanded } = this.state;
    const current = filterList.find(f => currentSort === f.value);

    return (
      <div className={ `filters ${isExpanded ? "filters--expanded" : ""}` }>
        <ul className="filters__list">
          {
            filterList.filter(f => currentSort !== f.value)
              .map(filter => (
                <li key={ filter.value } className="filters__filter">
                  <a className="filters__label" onClick={ () => this.onClick(filter) }>
                    <div className="filters__label__text">
                      <span>
                        { filter.label }
                      </span>
                    </div>
                    <div className="filters__label__icon">
                      <img src={ `assets/${filter.icon}` } />
                    </div>
                  </a>
                </li>
              ))
          }
          <li className="filters__filter filters__filter--selected">
            <a className="filters__label" onClick={ () => this.expand() }>
              <div className="filters__label__text">
                <span>
                  { current.label }
                </span>
              </div>
              <div className="filters__label__icon">
                <img src={ `assets/${current.icon}` } />
              </div>
            </a>
          </li>
        </ul>
      </div>
    )
  }
});
