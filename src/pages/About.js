import React from 'react';
import Header from '../components/Header';
import ContactPanel from '../components/ContactPanel';
import Footer from '../components/Footer';
import Logo from '../media/logo.png';
import '../styles/About.css';

/**
 * Returns the about page containing the about panel and the contact panel.
 *
 * @return {void}
 */
function About() {
  return (
    <div className='about-container'>
      <Header />
      <h1 className='about-title'>Driven to deliver <br></br><strong>excellence</strong></h1>
      <div className='about-content-container'>
        <div className='about-text-container'>
          <p className='about-text'>
            Hi, I&apos;m George. I&apos;m a web designer. I&apos;m currently new to the freelance game. My background is in more traditional software engineering, where I have over 3 years professional experience, working for some of the biggest companies in the world, like Siemens and Unity Technologies.
          </p>
          <p className='about-text'>
            I also have previous professional experience working on the web application FreeAgent, as well as working in their technical customer support team. All this to say, you&apos;re in safe hands. My professional experience as a software engineer and working in a support team has put me in a great place to join the freelance world and deliver exceptional results. To you.
          </p>
          <p className='about-text'>
            As you can probably tell, I want to help you. I want to understand what you need and bring it to life for you. And as a relatively new freelancer, I can guarantee dedication to your project.<br></br>
          </p>
          <p className='about-text'>
            I&apos;m also a keen film-watcher, reader, gamer and football watcher/player, so I&apos;ll chat about those all day too! Let&apos;s work together!<br></br>
          </p>
        </div>
        <div>
          <img src={Logo} className="about-image" alt="Logo" />
        </div>
      </div>
      <ContactPanel bgColor={'secondary-bg'} />
      <Footer />
    </div >
  );
}

export default About;
