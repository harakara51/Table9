import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {white, purple600, purple500} from 'material-ui/styles/colors';
import {LineChart, Line, ResponsiveContainer} from 'recharts';
import {typography} from 'material-ui/styles';

const Chart2Line = (props) => {

  const styles = {
    paper: {
      backgroundColor: purple500,
      padding: 10,
      margin: 25,
      minWidth: "20%"

    },
    div: {
      height: 95,
      padding: '5px 15px 0 15px'
    },
    header: {
      fontSize: 24,
      fontWeight: typography.fontWeightLight,
      color: white,
      backgroundColor: purple600,
      padding: 10
    }
  };

  return (
    <Paper style={styles.paper}>
      <div style={{
        ...styles.header
      }}>Spending last month</div>
      <div style={styles.div}>
        <ResponsiveContainer >
          <LineChart data={props.data}>
            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};



export default Chart2Line;