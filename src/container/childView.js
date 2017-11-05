import React, { Component } from 'react';
import AccountOverview from '../component/account-overview'
import {Row, Col} from 'react-flexbox-grid';
import Tabs from '../component/tabs';
import Sidebar from '../component/sidebar';
import {getTransactions} from '../data-layer';
import LineChart from '../component/lineChart';
import PieChart from '../component/PieChart';
import Data from '../data';



class ChildView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {data: null,
                  transactions:null}
}
  componentDidMount() {
 
      
    getTransactions({"id":103600000}).then((res) => {
      this.setState({transactions:res})}); 
  } 
  render() {
    if (this.state.transactions) {
      
  return (
    <div>
      <div className ="margin">
            </div>
            <Row>
            
          <Col xs={3} sm={3} md={3} lg={3} className="transactionSelector">
            <Sidebar
              data={this.state.transactions[0].customers[0].transactions  }/>
          </Col>
          <Col xs={9} sm={9} md={9} lg={9}>

                  <Tabs>
                      <AccountOverview />
                      <AccountOverview />
                      <AccountOverview />
                  </Tabs>
                  <Row>
                  <Col xs={6} sm={6} md={6} lg={6}>
                  <PieChart data={Data.dashBoardPage.browserUsage}/>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6}>
                  <LineChart data={Data.dashBoardPage.bp}/>
                  </Col>
                    </Row>
          
          </Col>
          </Row>
</div>)
    }
    return <h1> Loading </h1>
}
}
export default ChildView;
