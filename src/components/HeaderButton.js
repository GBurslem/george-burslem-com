import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/HeaderButton.css';

/**
 * The navigation buttons in the header.
 *
 * @param {string} props.title - The text to display on the button.
 * @param {string} props.link - The URL to navigate to when the button is clicked.
 * @return {JSX.Element} The button to be rendered.
 */
function HeaderButton({title, link}) {
  return (
    <Link to={link}>
      <button className="header-button">{title}</button>
    </Link>
  );
}

HeaderButton.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default HeaderButton;
