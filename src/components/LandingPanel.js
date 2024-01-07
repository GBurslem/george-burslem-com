import React, {useEffect, useState} from 'react';
import ActionButton from './ActionButton';
import '../styles/LandingPanel.css';
import axios from 'axios';

/**
 * The landing panel on the home page. Contains the homepage title and description of me.
 *
 * @return {JSX.Element} The rendered landing panel.
 */
function LandingPanel() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5066/api/greeting')
      .then((response) => {
        setGreeting(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='landing-panel-container'>
      <h1 className='landing-panel-title'>Hi. I&apos;m <span className='title-highlight'>George</span>, <br></br>I&apos;m a Software Engineer.</h1>
      <h3 className='landing-panel-subtitle'>
        I&apos;m a <strong>software engineer</strong> based in <strong>Edinburgh</strong> and I
        want to utilise my skills to address <br></br>the <strong><u>most meaningful and challenging problems in the industry.</u></strong>
      </h3>
      <p className='landing-panel-contact-text'>Email: george@georgeburslem.com<br></br>Phone: 07429 859011<br></br>Office Hours: Mon-Sun 09:00-18:00</p>
      <p>{greeting}</p>
      <ActionButton title="View Work" link="/work" />
    </div>
  );
}

export default LandingPanel;