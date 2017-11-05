
import React from 'react';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {grey400, cyan600, white} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';
import Wallpaper from 'material-ui/svg-icons/device/wallpaper';
import {Row, Col} from 'react-flexbox-grid';
import ChildBox from './childBox';
import {Link} from 'react-router-dom';

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

   
    return (
      <Paper>
          <Row>
          {this
            .props
            .data
            .map(customer => <div key={customer.id}>
            <Col xsOffset={1} xs={9}>
             <ChildBox data ={customer}/>
              <Divider inset={true}/>
              </Col>
            </div>)
          }
</Row>
      </Paper>
    );
  }
}

export default ChildBoxHolder;
