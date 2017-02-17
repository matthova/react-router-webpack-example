/* global document */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './src/components/App';
import Foo from './src/components/Foo';
import Bar from './src/components/Bar';
import Home from './src/components/Home';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/foo" component={Foo}/>
      <Route path="/bar" component={Bar}/>
    </Route>
  </Router>
), document.getElementById('root'));
