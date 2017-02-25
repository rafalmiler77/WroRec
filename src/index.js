import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App } from './App';
import { mainView } from './main-view';
import { tableView } from './table-view';
import store from './store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={mainView} />
        <Route path="/tableView" component={tableView} />
      </Route >
    </Router>
  </Provider>,
  document.getElementById('root'),
);
