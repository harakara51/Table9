
import React from 'react';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {grey400, cyan600, white, orange600} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';
import Wallpaper from 'material-ui/svg-icons/device/wallpaper';
import {Row, Col} from 'react-flexbox-grid';
import ChildBox from './childBox';
import {Link} from 'react-router-dom';
import CreditCard from 'material-ui/svg-icons/action/credit-card';
import InfoBox from '../component/infoBox';
class ChildBoxHolder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currenPatient: null,
      open: false
    };
  }

  render() {
    const styles = {
      subheader: {
        fontSize: 28,
        fontWeight: typography.fontWeightLight,
        backgroundColor: cyan600,
        color: white
      }
    };
    const s1 = {
      margini:0
    }

   
    return (
      <div className ="cardHolder"  >
        <Row>
          {this
            .props
            .data
            .map(customer => <div key={customer.id}>
  
            <InfoBox className = "infoBox" data = {customer} Icon={CreditCard} color={orange600} title= "Account #" value={customer.customer_id}/>
            </div>)
          }
          </Row>
    </div>
    );
  }
}

export default ChildBoxHolder;
