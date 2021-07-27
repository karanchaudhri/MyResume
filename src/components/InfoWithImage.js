import React from 'react';
import Images from '../images';

const InfoWithImage = ({infoText, image=Images.email, href}) => {
  return (
    <div style={styles.container}>
      <div style={styles.infoText}>{infoText}</div>
      <a href={href}><img style={styles.imageStyle} src={image} alt={infoText}/></a>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 7,
  },
  imageStyle: {
    width: 14,
    height: 14,
    marginLeft: 10,
  },
  infoText: {
    flex: 1,
    fontSize: 12,
    lineHeight: '18px',
  },
};

export default InfoWithImage;
