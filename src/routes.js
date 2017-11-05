import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import App from './App';
import NotFoundPage from './container/NotFoundPage';
import ChildView from './container/childView';
import Dashboard from './container/MainView';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Dashboard} />
    <Route path="/Child" component={ChildView} />
    <Route path="*" component={NotFoundPage} />
  </Router>
);

export default Routes;