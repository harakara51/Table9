import React, { Component } from 'react';
import {Provider as ThemeProvider} from 'rebass'
import logo from './logo.svg';
import {Navbar} from './component/navbar';
import MainView from './container/MainView'
import AccountOverview from './component/account-overview'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Tabs from './component/tabs';
import UsageBar from './component/usage-bar';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <ThemeProvider>
              <Navbar />
              <Tabs>
                  <UsageBar />
                  <AccountOverview />
                  <AccountOverview />
              </Tabs>
          </ThemeProvider>
      </MuiThemeProvider>
    )
  }
}

export default App;
