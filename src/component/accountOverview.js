import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Row, Col} from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Avatars from './avatars';



class AccountOverview extends React.Component {

  render() {
    const cardStyle = {
      minHeight: 344,
      padding: 10,
      margin: 25
    };

    const inputSyle = {
      maxWidth: "100%"
    }
    return (
      <div>
        <Paper style={cardStyle} zDepth={3}>
          <h1>Account Overview</h1>
          <Row>
          <Col xsOffset={1} xs={5}>
            <TextField
              id="first_name"
              defaultValue={this.props.data.account_id}
              floatingLabelText="Account Id"/>
          </Col>
          <Col xs={4}>
            <TextField
              id="last_name"
              defaultValue={this.props.data.primary_user_card_number}
              floatingLabelText="primary user's cardnumber"/>
          </Col>
        </Row>
        <Row>
          <Col xsOffset={1} xs={5}>
            <TextField
              id="first_name"
              defaultValue={this.props.data.balance}
              floatingLabelText="Balance"/>
          </Col>
          <Col xs={3}>
            <TextField
              id="last_name"
              defaultValue={this.props.data.credit_limit}
              floatingLabelText="credit limit"/>
          </Col>
        </Row>
        <Row>
          <Col xsOffset={1} xs={5}>
            <TextField
              id="first_name"
              defaultValue={parseFloat(Math.round(this.props.data.total_rewards_earned * 100) / 100).toFixed(2)}
              floatingLabelText="Rewards Earned"/>
          </Col>
          <Col xs={3}>
            <TextField
              id="last_name"
              defaultValue={parseFloat(Math.round(this.props.data.total_rewards_used * 100) / 100).toFixed(2)}
              floatingLabelText="total rewards used"/>
          </Col>
        </Row>
        </Paper>
      </div>
    );
  }
}

export default AccountOverview;
