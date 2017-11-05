import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider'
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import PhoneIcon from 'material-ui/svg-icons/communication/phone';
import GoalsIcon from 'material-ui/svg-icons/action/done';
import {Grid, Row, Col} from 'react-flexbox-grid';
import UsageTab from './usage';
import GoalsTab from './goals';
import RewardsTab from './rewards';



// style={styles.headline}

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  paragraph: {
    marginTop: 16,
    marginBottom: 12,
  },
  pages: {
    height: 300,
    width: 900,
    padding: 1,
  }
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const InfoTabs = ({children}) => (
  <Tabs>
    <Tab icon={<PhoneIcon/>} label="USAGE">
      <UsageTab />
    </Tab>
    <Tab icon={<GoalsIcon/>} label="GOALS">
      <GoalsTab />      
    </Tab>
    <Tab icon={<MapsPersonPin />} label="REWARDS">
      <RewardsTab />    
    </Tab>
  </Tabs>
);

export default InfoTabs;
