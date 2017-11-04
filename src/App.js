import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import MainView from './container/MainView';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <Navbar name="name"></Navbar>
        <MainView></MainView>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
