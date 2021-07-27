import './App.css';
import Header from './components/Header';
import React from 'react';
import SectionTitle from './components/SectionTitle';
import Experience from './components/Experience';
import SkillSet from './components/SkillSet';
import Project from './components/Project';
import Responsibilities from './components/Responsibilities';
import MainCourses from './components/MainCourses';

function App() {
  return (
    <div className="Resume">
      <Header
        name={'Karan Chaudhri'}
        title={'Full Stack Software Engineer'}
        email={'karan.chaudhry2008@gmail.com'}
        phone={'+1-919-413-3301'}
        location={'Newark, California'}
        linkedIn={'linkedin.com/in/karan-chaudhri'} />
        <div style={styles.container}>
          <div style={styles.leftContainer}>
            <SectionTitle title={'WORK EXPERIENCE'}/>
            <div style={styles.workExperienceContainer}>
              <Experience
                style={{paddingTop: 10}}
                title={'Senior Software Engineer'}
                company={'AppDynamics (Cisco)'}
                dates={'04/2019 - Present'}
                rightInfo={'San Francisco, CA'}>
                <Responsibilities
                  responsibilities={[
                  'Responsible for designing & developing AppD\'s Mobile App in React Native from scratch & various Backend API\'s to support the app.',
                  'Designed & implemented push notifications feature for sending alerts to the customers.'
                  ]}/>
              </Experience>

              <Experience
                title={'Full Stack Engineer'}
                company={'TripAdvisor'}
                dates={'02/2018 - 04/2019'}
                rightInfo={'El Segundo, CA'}>
                <Responsibilities responsibilities={[
                  'Part of Attractions team responsible for designing & developing Desktop, Mobile website & API\'s for Native.',
                  'Improved Viator.com user search experience using better/efficient Solr queries.',
                  'Unified user review collection platform for TripAdvisor.com & Viator.com, migrating 2.3M user reviews'
                ]}/>
              </Experience>

              <Experience
                title={'Software Engineer Intern'}
                company={'VMWare'}
                dates={'05/2017 - 08/2017'}
                rightInfo={'Atlanta, GA'}>
                <Responsibilities
                  responsibilities={[
                    'Worked with Boxer Android team responsible for developing Email app & developed features like segregation of device calendars, implementation of OAuth 2.0'
                  ]}/>
              </Experience>

              <Experience
                title={'Senior Software Engineer'}
                company={'MakeMyTrip'}
                dates={'01/2014 - 07/2016'}
                rightInfo={'Gurugram, India'}
                endTimeLine={true}>
                <Responsibilities
                  responsibilities={[
                  'Developed Android application from scratch for online travel booking.',
                  'Devised techniques to minimize lost payments transactions on mobile/website by 50%',
                  'Responsible for creating Payments backend API’s & services'
                ]} />
              </Experience>
            </div>
          </div>
          <div style={{flexGrow: 1}}/>
          <div style={styles.rightContainer}>
            <SectionTitle title={'SKILLS'}/>
            <SkillSet
              style={styles.skillSet}
              skills={[
                'Java',
                'Android',
                'Kotlin',
                'Amazon Web Services',
                'React Native',
                'Spring Framework',
                'Python',
                'React',
                'SQL',
                'Docker',
                'Hibernate',
                'NoSQL',
                'Vagrant',
                'Ansible',
                'Javascript',
                'Computer Networking',
                'Linux',
                'HTML',
                'CSS'
              ]}/>

            <SectionTitle style={styles.personalProjectsTitle} title={'PERSONAL PROJECTS'}/>
            <div style={styles.projectsContainer}>
              <Project
                title={'Home Automation'}
                points={[
                'Built an Home Automation system used to control home appliances using Raspberry Pi as server and Android/iOS app and Amazon Alexa skill as clients. It also detects state of objects by Image classification using machine learning. Whole assembly deployed at my home.'
              ]}/>

              <Project
                title={'Log Analyzer'}
                points={[
                  'Built a Log Analytics tool for MakeMyTrip which was used to analyze “what went wrong” when users proceed to pay for a service and generate custom graphs from data collected.'
                ]}/>

              <Project
                title={'Note Website'}
                points={[
                  'Built a Note Taking website in PHP, currently being used in my home business and later migrated to be used on AWS Platform.'
                ]}/>

              <Project
                title={'Hacking Scripts'}
                points={[
                  'Built various customized scripts for networking attacks like ARP Spoofing, De-Auth clients etc.'
                ]}/>
            </div>

            <SectionTitle style={styles.educationTitle} title={'Education'}/>
            <div style={styles.educationContainer}>
              <Experience
                title={'Master\'s of Computer Science'}
                company={'North Carolina State University'}
                dates={'07/2016 - 12/2017'}
                rightInfo={'GPA 3.93'}>
                <MainCourses
                  courses={[
                    'Operating Systems',
                    'DevOps',
                    'Algorithms',
                    'Cloud Computing',
                  ]}/>
              </Experience>

              <Experience
                title={'Bachelor\'s of Computer Science'}
                company={'Thapar University'}
                dates={'07/2010 - 05/2014'}
                rightInfo={'GPA 8.25'}
                endTimeLine={true}/>
            </div>
          </div>
        </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftContainer: {
    width: '50%',
  },
  rightContainer: {
    width: '45%',
  },
  workExperienceContainer: {
    marginLeft: 10,
    marginTop: 15,
  },
  skillSet: {
    marginLeft: 25,
    marginTop: 15,
    marginRight: 30,
  },
  personalProjectsTitle: {
    marginTop: 30,
  },
  projectsContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 25,
    marginTop: 15,
    marginRight: 30,
    gap: 15,
  },
  educationTitle: {
    marginTop: 30,
  },
  educationContainer: {
    marginTop: 15,
    marginRight: 30,
  },
};

export default App;
