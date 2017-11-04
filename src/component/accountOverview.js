import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Row, Col} from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';



class AccountOverview extends React.Component {
  render() {
    return (
      <div>
        <Paper zDepth={1}>
          <h1>Account Overview</h1>
        </Paper>
      </div>
    );
  }
}

export default AccountOverview;