import React from 'react';
import {Link} from 'react-router-dom';
import HeaderButton from './HeaderButton';
import HeaderButtonDropdown from './HeaderButtonDropdown';
import ActionButton from './ActionButton';
import Logo from '../media/logo.png';
import '../styles/Logo.css';
import '../styles/Header.css';

/**
 * Header for entire site.
 *
 * @return {JSX.Element} Renders the site header.
 */
function SiteHeader() {
  return (
    <div className="header-container">
      <div>
        <Link to="/">
          <img src={Logo} className="header-logo" alt="Logo" />
        </Link>
      </div>
      <div className="header-nav-links">
        <HeaderButtonDropdown
          title="Experience ▼"
          titleLink="/experience"
          dropdownOptions={[
            {title: 'Web Development', link: '/experience/web-development'},
            {title: 'C# and Unity', link: '/experience/csharp'},
            {title: 'Cloud Development', link: '/experience/cloud'},
            {title: 'Databases', link: '/experience/databases'},
            {title: 'SE Best Practices', link: '/experience/best-practices'},
          ]}
          />
          <HeaderButton title="What I'm Looking For" link="/looking-for" />
      </div>
      <div>
        <ActionButton title="Contact" link="/contact" />
      </div>
    </div>
  );
}

export default SiteHeader;
