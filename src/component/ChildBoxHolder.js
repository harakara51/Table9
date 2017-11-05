
import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {grey400, cyan600, white} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';
import Wallpaper from 'material-ui/svg-icons/device/wallpaper';
import {Row, Col} from 'react-flexbox-grid';
import ChildBox from './childBox';

class Sidebar extends React.Component {

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
        <List>
          <Subheader style={styles.subheader}>
            <Row>
              <Col xs={5}>Authorized Accounts
              </Col>
              <Col xsOffset={3} xs={1}>
                <AddPatient/>

              </Col>
            </Row>
          </Subheader>
          {this
            .props
            .data
            .map(customer => <div key={item.first_name}>
             <ChildBox data ={customer}>
              <Divider inset={true}/>
            </div>)}


      </Paper>
    );
  }
}

export default Sidebar;
