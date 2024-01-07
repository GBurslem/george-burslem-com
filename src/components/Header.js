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
        <HeaderButton title="About Me" link="/about" />
        <HeaderButtonDropdown
          title="Tech Stack ▼"
          dropdownOptions={[
            {title: 'React, JS, HTML, CSS', link: '/skills/web-stack'},
            {title: 'ASP .NET', link: '/skills/dotnet'},
            {title: 'C# and Unity', link: '/skills/csharp'},
            {title: 'Azure & AWS', link: '/skills/cloud'},
            {title: 'SQL', link: '/skills/database'},
            {title: 'CMS Solutions', link: '/skills/cms'},
            {title: 'Source Control', link: '/skills/source-control'},
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
