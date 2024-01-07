import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/ActionButton.css';

/**
 * ActionButton component that renders a button with a link.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The text to display on the button.
 * @param {string} props.link - The URL to navigate to when the button is clicked.
 * @return {JSX.Element} The rendered button with a link.
 */
function ActionButton({title, link}) {
  return (
    <Link to={link}>
      <button className="action-button">{title}</button>
    </Link>
  );
}

ActionButton.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ActionButton;
