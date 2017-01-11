import React from 'react';
import { Route, IndexRoute } from 'react-router';

import asyncComponent from './utils/asyncComponent'; /* for async page, show loading component */

import Root from './containers/Root';

export default (
  <Route path="/" component={Root}>
  </Route>
);
