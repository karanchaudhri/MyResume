import React from 'react';
import Colors from '../constants/Colors';
import InfoWithImage from './InfoWithImage';
import Images from '../images';

const Header = ({name, title, email, phone, location, linkedIn}) => {
  return (
    <div style={styles.container}>
      <div style={styles.leftContainer}>
        <div style={styles.name}>{name}</div>
        <div style={styles.title}>{title}</div>
      </div>
      <div style={styles.rightContainer}>
        <InfoWithImage href={'mailto:' + email } infoText={email} image={Images.email} />
        <InfoWithImage infoText={phone} image={Images.phone} />
        <InfoWithImage infoText={location} image={Images.location}/>
        <InfoWithImage href={'https://www.linkedin.com/' + linkedIn} infoText={linkedIn} image={Images.linkedIn}/>
      </div>
    </div>
  )
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    fontFamily: 'Ubuntu-Medium',
    alignSelf: 'stretch',
    paddingTop: 25,
    paddingLeft: 25,
    paddingRight: 25,
  },
  name: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 30,
  },
  title: {
    color: Colors.green,
    fontFamily: 'Ubuntu-Regular',
    fontSize: 18,
  },
  leftContainer: {
    fontFamily: 'Ubuntu-Medium',
    flex: 1,
  },
  rightContainer: {
    fontFamily: 'Ubuntu-Regular',
  },
};

export default Header;
