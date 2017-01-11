import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Root from './containers/Root';
import Home from './containers/Home';
import Login from './containers/Login';
import Quotes from './containers/Quotes';
import Tasks from './containers/Tasks';
import requireAuth from './components/hoc/RequireAuth';

export default (
  <Route path="/" component={Root}>
  	<IndexRoute component={Home} />
  	<Route path="/home" component={Home} />
  	<Route path="/login" component={Login} />
  	<Route path="/quotes" component={Quotes} />
  	<Route path="/tasks" component={requireAuth(Tasks)} />
  </Route>
);
