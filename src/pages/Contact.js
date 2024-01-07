import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Contact.css';

/**
 * Contact form for entering your name, email and message to send me an email.
 *
 * @return {void}
 */
function Contact() {
  return (
    <div>
      <Header />
      <div className="contact-container">
        <h1 className="contact-title">Want to work <br></br><strong>together?</strong></h1>
        <p className="contact-subtitle">If you have a project you&apos;d like to discuss give me an email or a call and I&apos;ll get back to you!</p>
        <p className="contact-subtitle">I&apos;ll usually get back to you within a day 💨</p>
        <p className='contact-details'>Email: george@georgeburslem.com<br></br>Phone: +447429 859011<br></br>Office Hours: Mon-Sun 09:00-18:00</p>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
