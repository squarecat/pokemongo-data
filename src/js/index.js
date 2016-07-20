import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';

import "../scss/style.scss";


import routes from './routes';

render(
  <Router children={ routes } history={ hashHistory } />,
  document.getElementById('react-body')
);
