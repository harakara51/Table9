import React, { Component } from 'react';
import AccountOverview from '../component/accountOverview';
import Axios from 'axios';
import {Row, Col} from 'react-flexbox-grid';
import {getAccounts} from '../data-layer'


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
    this.state = {data: null}
}
  componentDidMount() {
    getAccounts({"id":103600000}).then((res) => {
      this.setState({data:res})});
      
  } 
  render() {

    if (this.state.data) {
      return <AccountData mainAccount = {this.state.data}/>;
    }
    return <h1> Loading </h1>
  }
    
}

export default MainView;