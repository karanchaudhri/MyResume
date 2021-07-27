import React from 'react';
import Colors from '../constants/Colors';


const DataPoint = ({style, text, textStyle}) => {
  return (
    <div style={{...styles.container, ...style}}>
      <div style={styles.bullet}/>
      <div style={{...styles.text, ...textStyle}}>{text}</div>
    </div>
  );
};

const styles = {
  bullet: {
    backgroundColor: Colors.green,
    height: 1,
    marginTop: 7,
    minWidth: 5,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 12,
    marginLeft: 5,
  },
};

export default DataPoint;
