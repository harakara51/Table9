import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Grid, Row, Col} from 'react-flexbox-grid';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const rewardsData = [
  {
    img: '../images/starbucks.png',
    title: '$5 Starbucks Gift Card',
    author: 'jill111',
  },
  {
    img: '../images/xbox.png',
    title: '$15 Xbox Gift Card',
    author: 'pashminu',
  },
  {
    img: '../images/amazon.png',
    title: '$25 Amazon Gift Card',
    author: 'Danson67',
  },
  {
    img: '../images/iphone-x.png',
    title: 'iPhone X',
    author: 'fancycrave1',
  },
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const RewardsList = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {rewardsData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default RewardsList;