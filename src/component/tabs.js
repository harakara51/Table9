import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider'
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import PhoneIcon from 'material-ui/svg-icons/communication/phone';
import GoalsIcon from 'material-ui/svg-icons/action/done';
import {Grid, Row, Col} from 'react-flexbox-grid';


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

const TabsExampleIconText = () => (
  <Tabs>
    <Tab icon={<PhoneIcon/>} label="USAGE">
      <Grid fluid>
        <Row>
          <Col xs={12}>
              <h2>Tab One</h2>
                <p>This is an example</p>
                <p>Random HTMl incoming!!!!!</p>              
          </Col>
        </Row>
      </Grid>
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