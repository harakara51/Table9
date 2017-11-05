import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Row, Col} from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Avatars from './avatars';



class AccountOverview extends React.Component {
  render() {
    return (
      <div>
        <Paper zDepth={1}>
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col xs={6}>
                <h1>Account Overview</h1>                
              </Col>
            </Row>
          </Col>
        </Row>
        
        <Row>
          <Col xsOffset={1} xs={2}>
            <Avatars/>
          </Col>
          <Col xs={4}>
            <TextField
              id="first_name"
              defaultValue="# 234324234"
              floatingLabelText="Account Id"/>
          </Col>
          <Col xs={4}>
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