import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Row, Col} from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';



class ChildBox extends React.Component {

  render() {
    const cardStyle = {
      minHeight: 200,
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
          <Col xs={3}>
            <TextField
              id="last_name"
              defaultValue={this.props.data.primary_user_card_number}
              floatingLabelText="primary user's cardnumber"/>
          </Col>
        </Row>

        </Paper>
      </div>
    );
  }
}

export default ChildBox;