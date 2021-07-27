import React from 'react';
import DataPoint from './DataPoint';

const Project = ({title, points = []}) => {
  return (
    <div>
      <span style={styles.title}>{title}</span>
      {points.map(point => (
        <DataPoint style={{marginTop: 5}} text={point} textStyle={styles.textStyle}/>
      ))}
    </div>
  );
};

const styles = {
  title: {
    fontSize: 14,
    fontFamily: 'Ubuntu-Regular'
  },
  textStyle: {
    fontSize: 11,
  }
};

export default Project;
