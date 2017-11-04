import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'
import MainView from '../container/MainView';
import {AccountsView} from '../test-accounts-view'

export const Navbar= () => (
  <nav>
      <Link to='/dashboard'>{'Dashboard '}</Link>
      <Link to='/accounts'>{'Accounts'}</Link>

      <Route path='/dashboard' component={MainView} />
      <Route path='/accounts' component={AccountsView} />
  </nav>
)
