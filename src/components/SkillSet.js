import React from 'react';
import Skill from './Skill';

const SkillSet = ({style, skills=[]}) => {
  return (
    <div style={{...styles.container, ...style}}>
      {skills.map(skill => (
        <Skill name={skill}/>
      ))}
    </div>
  )
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 10,
    rowGap: 10,
  }
};

export default SkillSet;
