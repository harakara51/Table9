import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar} from './component/navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AccountsView} from './test-accounts-view'



class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <Navbar />
      </MuiThemeProvider>
    );
  }
}

export default App;
