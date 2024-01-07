import React from 'react';
import '../styles/ServicesPanel.css';
import PropTypes from 'prop-types';

/**
 * This panel contains a title for a service and the description of that service.
 *
 * @param {string} props.title - The title of the service.
 * @param {string} props.text - The text content describing the service.
 * @return {JSX.Element} - Returns the rendered services panel.
 */
function ServicesPanel({title, text}) {
  return (
    <div className='services-panel'>
      <h2 className='services-panel-title'>{title}</h2>
      <p className='services-panel-text'>{text}</p>
    </div>
  );
}

ServicesPanel.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ServicesPanel;
