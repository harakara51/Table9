import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'
import MainView from '../container/MainView';
import {Accounts, Account} from '../component/accounts-view'

export const Navbar= () => (
  <nav>
      <Link to='/dashboard'>{'Dashboard '}</Link>
      <Link to='/accounts'>{'Accounts'}</Link>

      <Route path='/dashboard' component={MainView} />
      <Route exact path='/accounts' component={Accounts} />
      <Route exact path='/accounts/:id' component={Account} />
  </nav>
)
