import React, { Component } from 'react';
import AccountOverview from '../component/account-overview'
import {Row, Col} from 'react-flexbox-grid';
import Tabs from '../component/tabs';
import UsageBar from '../component/usage-bar'



class ChildView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {data: null,
                  transactions:null}
}
  componentDidMount() {
 
      
  } 
  render() {
  return (
    <div> 
      <Tabs>
        <UsageBar />
        <AccountOverview />
        <AccountOverview />
      </Tabs>
    </div>
  )
    
}
}
export default ChildView;
