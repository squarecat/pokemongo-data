import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';

import "../scss/style.scss";
window.app = {
  defaultMovedexSort: "data.Power",
  defaultPokedexSort: "dexNumber",
  locale: "en"
};

import routes from './routes';

render(
  <Router children={ routes } history={ hashHistory } />,
  document.getElementById('react-body')
);

for (var i = 0; i < first.length; i++) {
  if (first[i] === "\") {
    var octstr = first.substring(i+1, i+3);
    console.log(octstr);
  }
}