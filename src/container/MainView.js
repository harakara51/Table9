import React, { Component } from 'react';
import AccountOverview from '../component/accountOverview';
import ChildAccountOverview from '../component/childAccountOverview';
import Linechart from '../component/linechart';
import PieChart from '../component/piechart';
import Axios from 'axios';
import {Row, Col} from 'react-flexbox-grid';

class MainView extends React.Component {
  // componentDidMount() {


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
<Row>
<ChildAccountOverview/>

</Row>
<Row>
<Linechart/>
</Row>
<Row>
<PieChart/>
</Row>
      </div>
    );
  }
}

export default MainView;
