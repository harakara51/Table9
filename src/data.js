import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
  menus: [
    {
      text: 'DashBoard',
      icon: <Assessment/>,
      link: '/dashboard'
    }, {
      text: 'Form Page',
      icon: <Web/>,
      link: '/form'
    }, {
      text: 'Table Page',
      icon: <GridOn/>,
      link: '/table'
    }, {
      text: 'Login Page',
      icon: <PermIdentity/>,
      link: '/login'
    }
  ],
  tablePage: {
    items: [
      {
        id: 1,
        name: 'Product 1',
        price: '$50.00',
        category: 'Category 1'
      }, {
        id: 2,
        name: 'Product 2',
        price: '$150.00',
        category: 'Category 2'
      }, {
        id: 3,
        name: 'Product 3',
        price: '$250.00',
        category: 'Category 3'
      }, {
        id: 4,
        name: 'Product 4',
        price: '$70.00',
        category: 'Category 4'
      }, {
        id: 5,
        name: 'Product 5',
        price: '$450.00',
        category: 'Category 5'
      }, {
        id: 6,
        name: 'Product 6',
        price: '$950.00',
        category: 'Category 6'
      }, {
        id: 7,
        name: 'Product 7',
        price: '$550.00',
        category: 'Category 7'
      }, {
        id: 8,
        name: 'Product 8',
        price: '$750.00',
        category: 'Category 8'
      }
    ]
  },
  dashBoardPage: {

    weight: [
      {
        name: 'Jan',
        uv: 180
      }, {
        name: 'Feb',
        uv: 190
      }, {
        name: 'Mar',
        uv: 200
      }, {
        name: 'Apr',
        uv: 200
      }, {
        name: 'May',
        uv: 200
      }, {
        name: 'Jun',
        uv: 180
      }, {
        name: 'Jul',
        uv: 190
      }, {
        name: 'Aug',
        uv: 200
      }, {
        name: 'Sep',
        uv: 210
      }, {
        name: 'Oct',
        uv: 220
      }, {
        name: 'Nov',
        uv: 240
      }, {
        name: 'Dec',
        uv: 230
      }
    ],
    bp: [
      {
        pv: 2400
      }, {
        pv: 1398
      }, {
        pv: 9800
      }, {
        pv: 3908
      }, {
        pv: 4800
      }, {
        pv: 3490
      }, {
        pv: 4300
      }
    ],
    browserUsage: [
      {
        name: 'Video Games',
        value: 800,
        color: cyan600,
        icon: <ExpandMore/>
      }, {
        name: 'Misc',
        value: 300,
        color: pink600,
        icon: <ChevronRight/>
      }, {
        name: 'Food',
        value: 300,
        color: purple600,
        icon: <ExpandLess/>
      }
    ]
  }
};

export default data;
