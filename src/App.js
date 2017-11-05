import React, { Component } from 'react';
import {Provider as ThemeProvider} from 'rebass'
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import {Navbar} from './component/navbar';
import MainView from './container/MainView'
import AccountOverview from './component/account-overview'
import Header from './component/Header';
import LeftDrawer from './component/LeftDrawer';
import ThemeDefault from './theme-default';
import Tabs from './component/tabs';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({navDrawerOpen: nextProps.width === LARGE});
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }
  render() {
    const menu =  [
      {
        text: 'DashBoard',
        icon: <Assessment/>,
        link: '/dashboard'
      }, {
        text: 'Manage Accounts',
        icon: <Web/>,
        link: '/form'
      }, {
        text: 'Planning',
        icon: <GridOn/>,
        link: '/table'
      }, {
        text: 'Manage Rewards',
        icon: <PermIdentity/>,
        link: '/quest'
      }
    ]
    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };
    return (
      <MuiThemeProvider>
         <div>
         <Header styles={styles.header}
                  handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/>

         <LeftDrawer navDrawerOpen={navDrawerOpen}
                        menus={menu}
                        username="Patrick"/>

            <div style={styles.container}>
              {this.props.children}
            </div>
            <MainView/>
              </div>
      </MuiThemeProvider>
    )
  }
}

export default withWidth()(App);
