import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import {Grid, Row, Col} from 'react-flexbox-grid';
import UsageBar from './usage-bar';
import Avatars from './avatars';


const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

class CheckboxExampleSimple extends React.Component {
  state = {
    checked: false,
  }

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  render() {
    return (
      <Grid fluid>
      <Row center="xs">
        <Col xs>
          <h2>Goals Overview</h2>
          <Row>
            <Col xs>
              <h3>Level 1</h3>
              <Row>
                <Col xsOffset={2} xs={8}>
                  <Checkbox
                    label="Keep your usage under your credit limit"
                    style={styles.checkbox}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs>
              <h3>Level 2</h3>
              <Row>
                <Col xsOffset={2} xs={8}>
                  <Checkbox
                    label="Don't spend more than $20 on fast food"
                    style={styles.checkbox}
                  />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs>
            <h3>Level 3</h3>
              <Row>
                <Col xsOffset={2} xs={8}>
                  <Checkbox
                    label="Stay more than 20% under your credit limit."
                    style={styles.checkbox}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
          <Col xs>
            <h3>Long-Term Goal</h3>
            <Row>
              <Col xsOffset={2} xs={8}>
                <Checkbox
                  label="Get a B average or higher on your Report Card."
                  style={styles.checkbox}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  </Grid>
      // <div style={styles.block}>
      //   <Checkbox
      //     label="Simple"
      //     style={styles.checkbox}
      //   />
        /* <Checkbox
          label="Simple with controlled value"
          checked={this.state.checked}
          onCheck={this.updateCheck.bind(this)}
          style={styles.checkbox}
        /> */
      // </div>
    );
  }
}

export default CheckboxExampleSimple;