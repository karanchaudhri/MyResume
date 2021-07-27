import React from 'react';
import Colors from '../constants/Colors';
import LeftRightText from './LeftRightText';

const Experience = ({style, title, company, dates, rightInfo, children, endTimeLine = false}) => {
  return (
    <div style={{...styles.container, ...style}}>
      <div style={styles.leftContainer}>
        <div style={styles.circle}/>
        {!endTimeLine && <div style={styles.verticalLine}/>}
      </div>
      <div style={styles.rightContainer}>
        <span style={styles.title}>{title}</span>
        <div style={styles.company}>{company}</div>
        <LeftRightText style={styles.leftRightText} leftText={dates} rightText={rightInfo}/>
        {children != null && (
          <div style={styles.childrenContainer}>
          {children}
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  title: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 18,
    position: 'relative',
    top: -4,
  },
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  leftContainer : {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginLeft: 10,
  },
  circle: {
    display: 'inline-block',
    borderWidth: 3,
    borderRadius: 8,
    minHeight: 8,
    minWidth: 8,
    borderStyle: 'solid',
    borderColor: Colors.green,
  },
  verticalLine: {
    height: '100%',
    alignSelf: 'center',
    backgroundColor: Colors.green,
    width: 1,
  },
  company: {
    fontFamily: 'Ubuntu-Regular',
    marginTop: 1,
  },
  leftRightText: {
    marginTop: 5,
  },
  childrenContainer: {
    marginTop: 10,
    paddingBottom: 15,
  }
};

export default Experience;
