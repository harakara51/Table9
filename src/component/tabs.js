import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider'
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import PhoneIcon from 'material-ui/svg-icons/communication/phone';
import GoalsIcon from 'material-ui/svg-icons/action/done';



const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const TabsExampleIconText = () => (
  <Tabs>
    <Tab icon={<PhoneIcon/>} label="USAGE">
      <div>
        <h2 style={styles.headline}>Tab One</h2>
        <p>This is an example</p>
        <p>Random HTMl incoming!!!!!</p>
      </div>
    </Tab>
    <Tab
      icon={<GoalsIcon/>}
      label="GOALS"
    />
    <Tab
      icon={<MapsPersonPin />}
      label="REWARDS"
    />
  </Tabs>
);

export default TabsExampleIconText;