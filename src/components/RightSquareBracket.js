import React from 'react';
import Colors from '../constants/Colors';

const RightSquareBracket = (style) => {
  return (
    <div style={{...styles.container, ...style}}>
      <div style={styles.line}/>
      <div style={styles.vertical}/>
      <div style={styles.line}/>
    </div>
  )
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: 5
  },
  line: {
    width: 10,
    height: 1,
    backgroundColor: Colors.green,
  },
  vertical: {
    height: '100%',
    width: 1,
    backgroundColor: Colors.green,
  },
};

export default RightSquareBracket;
