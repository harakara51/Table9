import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import MainView from './container/MainView';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AccountsView} from './test-accounts-view'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <Navbar name="name"></Navbar>
        <MainView></MainView>
        <AccountsView />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
