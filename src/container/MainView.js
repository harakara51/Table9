import React, { Component } from 'react';
import AccountOverview from '../component/accountOverview';

class MainView extends React.Component {
  render() {
    return (
      <div>
        {<AccountOverview/>}
      </div>
    );
  }
}

export default MainView;