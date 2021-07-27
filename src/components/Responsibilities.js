import React from 'react';
import Colors from '../constants/Colors';
import LeftSquareBracket from './LeftSquareBracket';
import RightSquareBracket from './RightSquareBracket';
import DataPoint from './DataPoint';

const Responsibilities = ({style, responsibilities = []}) => {
  return (
    <div style={{...styles.container, ...style}}>
      <LeftSquareBracket style={{marginTop: 5}}/>
      <div style={styles.middleContainer}>
        <div style={styles.responsibilitiesText}>Responsibilities</div>
          <div style={styles.responsibilitiesContainer}>
          {responsibilities.map(responsibility => (
            <DataPoint text={responsibility} style={{marginTop: 5}} />
          ))}
        </div>
      </div>
      <RightSquareBracket style={{marginTop: 5}}/>
    </div>
  )
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  middleContainer: {
    flex: 1,
  },
  responsibilitiesText :{
    fontFamily: 'Ubuntu-MediumItalic',
    fontSize: 11,
    marginLeft: 10,
    color: Colors.green,
  },
  responsibilitiesContainer: {
    paddingBottom: 10,
  }
};

export default Responsibilities;
