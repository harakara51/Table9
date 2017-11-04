import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar} from './component/navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AccountsView} from './test-accounts-view';
import Tabs from './component/tabs';




class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Navbar />
          <Tabs/>
          <AccountsView/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
