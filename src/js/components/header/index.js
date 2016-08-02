import React from 'react';
import { Link } from 'react-router';

export default () => (
  <ul className="header">
    <li className="header__nav-item" data-nav="pokedex">
      <Link to="/pokedex">
        <img className="header__nav-icon" src="./assets/icons/pokedex.png" />
        <span className="header__nav-text">Pokedex</span>
      </Link>
    </li>
    <li className="header__nav-item" data-nav="movedex">
      <Link to="/movedex">
        <img className="header__nav-icon" src="./assets/icons/pokemon.png" />
        <span className="header__nav-text">Movedex</span>
      </Link>
    </li>
    <li className="header__nav-item" data-nav="items">
      <Link to="/items">
        <img className="header__nav-icon" src="./assets/icons/items.png" />
        <span className="header__nav-text">Items</span>
      </Link>
    </li>
    <li className="header__nav-item" data-nav="faq">
      <Link to="/faq">
        <img className="header__nav-icon" src="./assets/icons/items.png" />
        <span className="header__nav-text">FAQ</span>
      </Link>
    </li>
  </ul>
);
