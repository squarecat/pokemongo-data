import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import "../scss/style.scss";


import routes from './routes';

render(
  <Router children={routes} history={browserHistory} />,
  document.getElementById('react-body')
);
