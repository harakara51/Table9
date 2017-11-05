import React, { Component } from 'react';
import AccountOverview from '../component/accountOverview';
import ChildBoxHolder from '../component/ChildBoxHolder';
import Sidebar from '../component/sidebar';
import {orange600, purple600, pink600} from 'material-ui/styles/colors';
import Axios from 'axios';
import {Row, Col} from 'react-flexbox-grid';
import {getAccounts, getTransactions} from '../data-layer';
import CreditCard from 'material-ui/svg-icons/action/favorite';
import Assessment from 'material-ui/svg-icons/action/assessment';
import InfoBox from '../component/infoBox';


const AccountData =(props) => {

  return (
    <div>
    <Row>
<Col xs={12} sm={3} md={2} lg={1} />
<Col xs={6} sm={6} md={8} lg={10} >
<AccountOverview data ={props.mainAccount[0]}/>
</Col>
<Col xs={6} sm={3} md={2} lg={1} />
</Row>

  </div>
  )

};
class MainView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {data: null,
                  transactions:null}
}
  componentDidMount() {
    getAccounts({"id":103600000}).then((res) => {
      this.setState({data:res})});

      getTransactions({"id":103600000}).then((res) => {
        this.setState({transactions:res})});  
      
  } 
  render() {
  
    if (this.state.data && this.state.transactions) {
      return  (
        <div>
          <Row className ="margin">
            </Row>
          <Row>
            
          <Col xs={3} sm={3} md={3} lg={3} className="transactionSelector">
            <Sidebar
              data={this.state.transactions[0].customers[0].transactions  }/>
          </Col>
          <Col xs={9} sm={9} md={6} lg={9}>

              <Row>
              <Col xs={8} sm={8} md={8} lg={8}>

            <AccountData mainAccount = {this.state.data}/>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3}>
            <Row>
            <InfoBox className = "infoBox" Icon={CreditCard} color={pink600} title="Credit History" value="748"/>
            </Row>
            <Row>
            <InfoBox className = "infoBox" Icon={Assessment}
                        color={purple600}
                        title="Rewards Point"
                        value="460"
                />
                </Row>
            </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
            <ChildBoxHolder data= {this.state.data[0].authorized_users}/>
            </Col>
            </Row>
      </Col>
      </Row>
      </div>
      )
    }
    return <h1> Loading </h1>
  }
    
}

export default MainView;
