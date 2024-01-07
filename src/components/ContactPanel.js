import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ContactPanel.css';

/**
 * The navigation buttons in the header.
 *
 * @param {string} props.bgColor - main-bg or secondary-bg as defined by AboutPanel.css.
 * @return {JSX.Element} The button to be rendered.
 */
function ContactPanel({bgColor}) {
  return (
    <div className={`contact-panel ${bgColor}`}>
      <h1 className="contact-panel-title">Want to get in touch?</h1>
      <p className="contact-panel-subtitle">If you have a project or role you&apos;d like to discuss give me an email or a call
        and I&apos;ll get back to you. I&apos;ll usually get back to you within a day 💨</p>
      <p className='contact-panel-details'>Email: george@georgeburslem.com<br></br>Phone: +44 7429 859011<br></br>Working Hours: Mon-Sat 09:00-18:00</p>
    </div>
  );
}

ContactPanel.propTypes = {
  bgColor: PropTypes.string.isRequired,
};

export default ContactPanel;
