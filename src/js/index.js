import PokedexP"./views/pokemon.view";

import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';

import store from '../shared/store';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';

import routes from './routes';

render(
  <Provider store={store}>
    <Router children={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('react-view')
);
