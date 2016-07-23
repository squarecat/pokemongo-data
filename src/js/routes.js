import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './components';

import Pokedex from './components/pokedex';
import PokemonPopover from './components/pokedex/popover';

import Movedex from './components/movedex';
import MovePopover from './components/movedex/popover';

import Items from './components/items';
import Faq from './components/faq';

export default (
  <Route path="/" name="app" component={ App } >
    <IndexRedirect to="/pokedex" />
    <Route path="pokedex" component={ Pokedex }>
      <Route path="/pokedex/:id" component={ PokemonPopover }>
      </Route>
    </Route>

    <Route path="movedex" component={ Movedex } expanded={ true }>
      <Route path="/movedex/:id" component={ MovePopover } />
    </Route>
  </Route>
);
