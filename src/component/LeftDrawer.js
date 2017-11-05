import React, {PropTypes} from 'react';
import Drawer from 'material-ui/Drawer';
import {spacing, typography} from 'material-ui/styles';
import {black, blue600} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'
import Avatar from 'material-ui/Avatar';

const LeftDrawer = (props) => {
  let {navDrawerOpen} = props;

  const styles = {
    logo: {
      cursor: 'pointer',
      fontSize: 22,
      color: typography.textFullWhite,
      lineHeight: `${spacing.desktopKeylineIncrement}px`,
      fontWeight: typography.fontWeightLight,
      backgroundColor: blue600,
      paddingLeft: 40,
      height: 56
    },
    menuItem: {
      color: blue600,
      fontSize: 14
    },
    avatar: {
      div: {
        padding: '15px 0 20px 15px',
        height: 45
      },
      icon: {
        float: 'left',
        display: 'block',
        marginRight: 15,
        boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
      },
      span: {
        paddingTop: 12,
        display: 'block',
        color: 'black',
        fontWeight: 300,
        textShadow: '1px 1px #444'
      }
    }
  };

  return (
    <Drawer docked={true} open={navDrawerOpen}>
      <div style={styles.logo}>
        Admin
      </div>
      <div style={styles.avatar.div}>
        <Avatar
          src="http://r.ddmcdn.com/w_606/s_f/o_1/cx_0/cy_15/cw_606/ch_404/APL/uploads/2014/06/10-kitten-cuteness-1.jpg"
          size={50}
          style={styles.avatar.icon}/>
        <span style={styles.avatar.span}>{props.username}</span>
      </div>
      <div>
        {props
          .menus
          .map((menu, index) => <MenuItem
            key={index}
            style={styles.menuItem}
            primaryText={menu.text}
            leftIcon={menu.icon}
            containerElement={< Link to = {
            menu.link
          } />}/>)}
      </div>
    </Drawer>
  );
};


export default LeftDrawer;
