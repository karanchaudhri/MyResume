import React from 'react';
import Colors from '../constants/Colors';

const LeftRightText = ({style, leftText, rightText}) => {
  return (
    <div style={{...styles.container, ...style}}>
      <div>{leftText}</div>
      <div>{rightText}</div>
    </div>
  )
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'Ubuntu-MediumItalic',
    color: Colors.green,
    fontSize: 11,
    justifyContent: 'space-between',
  }
};

export default LeftRightText;
