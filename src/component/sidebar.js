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

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currenPatient: null,
      open: false
    };
  }

  render() {
      const transaction = this.props.data.slice(55,86);
    const styles = {
      subheader: {
        fontSize: 24,
        fontWeight: typography.fontWeightLight,
        backgroundColor: cyan600,
        color: white
      }
    };
    let count =0;
    const iconButtonElement = (
      <IconButton touch={true} tooltipPosition="bottom-left">
        <MoreVertIcon color={grey400}/>
      </IconButton>
    );

    const rightIconMenu = (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>View</MenuItem>
      </IconMenu>
    );

    return (
      <Paper>
        <List>
          <Subheader style={styles.subheader}>
            <Row>
              <Col xs={5}>Recent Transactions
              </Col>
              <Col xsOffset={3} xs={1}>

              </Col>
            </Row>
          </Subheader>
          {transaction
            .map((item, i) => 
            
            
            <div key={item.first_name}>

              <ListItem
                leftAvatar={< Avatar icon = { < Wallpaper />
              } />}
                key
                ={item.id}
                primaryText={item.merchant_name + " : $" + item.amount}
                secondaryText={item.day + " , " + item.month + " , " + item.year}
                rightIconButton={rightIconMenu}/>
              <Divider inset={true}/>
           
            </div>)}
        </List>

      </Paper>
    );
  }
}

export default Sidebar;
