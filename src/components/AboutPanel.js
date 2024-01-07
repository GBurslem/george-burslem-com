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
      <p className="about-panel-text">I&apos;m a software engineer based in Edinburgh with 4+ years professional
        software engineering experience and a degree in Computer Science. I&apos;ve worked at some of the biggest companies in the world,
        like Unity Technologies and Siemens. Now I&apos;m looking to tackle the most challening problems in the industry.
      </p>
      <p className="about-text-checklist">
        ✅ 4+ years software engineering experience <br></br>
        ✅ Experience leading projects to global release <br></br>
        ✅ Focus on challenging, meaningful work
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
