import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider'
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import PhoneIcon from 'material-ui/svg-icons/communication/phone';
import GoalsIcon from 'material-ui/svg-icons/action/done';
import {Grid, Row, Col} from 'react-flexbox-grid';
import UsageBar from './usage-bar';
import Avatars from './avatars';




function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

class UsageTab extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row center="xs">
          <Col xs>
            <h2>Credit Usage</h2>
            <Row>
              <Col xs>
                <h3>Account 1</h3>
                <Row>
                  <Col xs={1}>
                    <Avatars/>
                  </Col>
                  <Col xs>                  
                    <UsageBar />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs>
                <h3>Account 2</h3>
                <Row>
                  <Col xs={1}>
                    <Avatars/>
                  </Col>
                  <Col xs>                  
                    <UsageBar />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs>
                <h3>Account 3</h3>
                <Row>
                  <Col xs={1}>
                    <Avatars/>
                  </Col>
                  <Col xs>                  
                    <UsageBar />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default UsageTab;