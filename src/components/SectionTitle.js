import React from 'react';
import Colors from '../constants/Colors';

const SectionTitle = ({style, title = 'WORK EXPERIENCE'}) => {
  return (
    <div style={{...styles.container, ...style}}>
      <div style={styles.title}>{title}</div>
      <div style={styles.divider}/>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  title: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 19,
    marginLeft: 25,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.green,
    marginTop: 2,
  }
};

export default SectionTitle;
