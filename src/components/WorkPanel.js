import React from 'react';
import '../styles/WorkPanel.css';
import AspLogo from '../media/asp-logo.png';
import ReactLogo from '../media/react-logo.png';
import JsLogo from '../media/js-logo.png';
import UnityLogo from '../media/unity-logo.png';
import CSharpLogo from '../media/c-sharp-logo.png';
import PropTypes from 'prop-types';

/**
 * The work panel displaying all the work panels.
 *
 * @param {string} props.bgColor - main-bg or secondary-bg as defined by AboutPanel.css
 * @return {JSX.Element} The rendered work panel.
 */
function WorkPanel({bgColor}) {
  return (
    <div className={`work-panel-container ${bgColor}`}>
      <h2 className="work-title">My Tech Stack</h2>
      <div className="work-panels">
        <div className="work-panel">
          <div className="top-row">
            <img className="logo-img" src={JsLogo} alt="JavaScript Logo" />
            <img className="logo-img" src={ReactLogo} alt="React Logo" />
          </div>
          <div className="bottom-row">
            <img className="logo-img" src={AspLogo} alt="ASP Logo" />
          </div>
        </div>
        <div className="work-panel">
          <img className="logo-img" src={CSharpLogo} alt="C Sharp Logo" />
          <img className="logo-img" src={UnityLogo} alt="Unity Logo" />
        </div>
      </div>
    </div>
  );
}

WorkPanel.propTypes = {
  bgColor: PropTypes.string.isRequired,
};

export default WorkPanel;
