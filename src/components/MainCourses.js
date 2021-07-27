import React from 'react';
import LeftSquareBracket from './LeftSquareBracket';
import DataPoint from './DataPoint';
import RightSquareBracket from './RightSquareBracket';
import Colors from '../constants/Colors';

const MainCourses = ({style, courses}) => {
  return (
    <div style={{...styles.container, ...style}}>
      <LeftSquareBracket style={{marginTop: 5}}/>
      <div style={styles.middleContainer}>
        <div style={styles.mainCoursesText}>Main Courses</div>
        <div style={styles.coursesContainer}>
          {courses.map(course => (
            <DataPoint text={course} style={{marginTop: 5, width: '50%'}} />
          ))}
        </div>
      </div>
      <RightSquareBracket style={{marginTop: 5}}/>
    </div>
  );
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
  mainCoursesText :{
    fontFamily: 'Ubuntu-MediumItalic',
    fontSize: 11,
    marginLeft: 10,
    color: Colors.green,
  },
  coursesContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 10,
    flexWrap: 'wrap',
    rowGap: 10,
  }
};

export default MainCourses;
