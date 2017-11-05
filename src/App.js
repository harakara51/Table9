import React, { Component } from 'react';
import {Provider as ThemeProvider} from 'rebass'
import logo from './logo.svg';
import {Navbar} from './component/navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <ThemeProvider>
              <Navbar />
          </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}

export default App;
