import React from 'react';
import Colors from '../constants/Colors';

const Skill = ({name}) => {
  return (
    <span style={styles.name}>{name}</span>
  )
};

const styles = {
  name: {
    backgroundColor: Colors.green,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    fontFamily: 'Ubuntu-Regular',
    fontSize: 11,
    color: 'white',
  },
};

export default Skill;
