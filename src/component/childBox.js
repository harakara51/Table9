import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Row, Col} from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';



class ChildBox extends React.Component {

  render() {
      console.log(this);
    const cardStyle = {
    

    };


    return (
      <div>
        <Paper style={cardStyle} zDepth={3}>
          <Row>
          <Col xsOffset={1} xs={5}>
            <TextField
              id="first_name"
              defaultValue={this.props.data.credit_card_number}
              floatingLabelText="credit_card_number"/>
          </Col>
          <Col xs={3}>
            <TextField
              id="last_name"
              defaultValue={this.props.data.customer_id}
              floatingLabelText="customer_id"/>
          </Col>
        </Row>

        </Paper>
      </div>
    );
  }
}

export default ChildBox;