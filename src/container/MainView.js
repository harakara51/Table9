import React, { Component } from 'react';
import AccountOverview from '../component/account-overview';
import Axios from 'axios';
import {Row, Col} from 'react-flexbox-grid';

class MainView extends React.Component {
  // componentDidMount() {
  //   let config = {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Credentials": true,
  //       "Access-Control-Allow-Methods": "*",
  //       'Content-Type':'application/json',
  //       'Access-Control-headers': 'Authorization',
  //       'Access-Control-headers': 'Content-Type',
  //       'Accept':'application/json',
  //     }
  //   }

  //   let url ='https://3hkaob4gkc.execute-api.us-east-1.amazonaws.com/prod/au-hackathon/accounts'
  //   Axios
  //     .post(url, config)
  //     .then(res => {console.log(res)})
  // }
  render() {
    return (
      <div>
        <Row>
  <Col xs={12} sm={3} md={2} lg={1} />
  <Col xs={6} sm={6} md={8} lg={10} >
  <AccountOverview/>
  </Col>
  <Col xs={6} sm={3} md={2} lg={1} />
</Row>

      </div>
    );
  }
}

export default MainView;
