import React from 'react';
import ActionButton from '../components/ActionButton';
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
      <h1 className="contact-panel-title">Ready to work together?</h1>
      <p className="contact-panel-text">Click below to find some time to chat and get started building your site 💪</p>
      <ActionButton title={'Book a Free Meeting'} link={'/contact'} />
    </div>
  );
}

ContactPanel.propTypes = {
  bgColor: PropTypes.string.isRequired,
};

export default ContactPanel;
