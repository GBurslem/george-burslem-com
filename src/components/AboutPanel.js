import React from 'react';
import '../styles/AboutPanel.css';
import logo from '../media/logo.png';
import PropTypes from 'prop-types';

/**
 * The about panel containing text info on the left and image/logo on the right.
 *
 * @param {string} props.bgColor - main-bg or secondary-bg as defined in AbouPanel.css.
 * @return {JSX.Element} The rendered panel with text and image.
 */
function AboutPanel({bgColor}) {
  return (
    <div className={`about-panel ${bgColor}`}>
      <AboutText />
      <AboutImage />
    </div>
  );
}

AboutPanel.propTypes = {
  bgColor: PropTypes.string.isRequired,
};

/**
 * The about text on the right hand side of the panel.
 *
 * @return {void}
 */
function AboutText() {
  return (
    <div className="about-text-panel">
      <h2 className="about-panel-title">About <strong>George</strong></h2>
      <p className="about-panel-text">I&apos;m a web designer based in Edinburgh with over 3 years professional
        software engineering experience. I&apos;ve worked at some of the biggest companies in the world,
        like Unity Technologies and Siemens. Now I want to help make your business grow 🚀
      </p>
      <p className="about-text-checklist">
        ✅ Professional software engineering experience <br></br>
        ✅ Focus on local businesses <br></br>
        ✅ Direct, anytime (almost!) support
      </p>
    </div>
  );
}

/**
 * The logo/image to the right of the about text.
 *
 * @return {void}
 */
function AboutImage() {
  return (
    <div className="about-image-panel">
      <img src={logo} className="about-image" alt="Logo" />
    </div>
  );
}

export default AboutPanel;
