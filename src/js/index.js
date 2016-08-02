import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';

import "../scss/style.scss";
window.app = {
  defaultMovedexSort: "power",
  defaultPokedexSort: "dex_number",
  locale: "en"
};

import routes from './routes';

render(
  <Router children={ routes } history={ hashHistory } />,
  document.getElementById('react-body')
);
