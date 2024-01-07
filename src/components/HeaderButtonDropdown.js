import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/HeaderButtonDropdown.css';

/**
 * A header navigation button with a dropdown.
 *
 * @param {string} props.title - The text to display on the button.
 * @param {string} props.link - The URL to navigate to when the button is clicked.
 * @param {Array} props.dropdownOptions - The options to display in the dropdown menu.
 * @return {JSX.Element} The button to be rendered.
 */
function HeaderButtonDropdown({title, titleLink, dropdownOptions}) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      className="header-button-container"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >

    <Link to={titleLink}><button className="header-button">{title}</button></Link>
      {isHovering && (
        <div className="dropdown-content">
          {dropdownOptions.map((option, index) => (
            <Link key={index} to={option.link} className="dropdown-item">
              {option.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

HeaderButtonDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  titleLink: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  dropdownOptions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ),
};

export default HeaderButtonDropdown;
