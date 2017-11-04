import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Row, Col} from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';



class AccountOverview extends React.Component {
  render() {
    return (
      <div>
        <Paper zDepth={1}>
          <h1>Account Overview</h1>
          <Row>
          <Col xsOffset={1} xs={5}>
            <TextField
              id="first_name"
              defaultValue="# 234324234"
              floatingLabelText="Account Id"/>
          </Col>
          <Col xs={3}>
            <TextField
              id="last_name"
              defaultValue="John Doe"
              floatingLabelText="Name"/>
          </Col>
        </Row>
        </Paper>
      </div>
    );
  }
}

export default AccountOverview;