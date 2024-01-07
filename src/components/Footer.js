import React from 'react';
import '../styles/Footer.css';
import {Link} from 'react-router-dom';

/**
 * Footer for entire website.
 *
 * @return {JSX.Element} Renders the complete footer element.
 */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-column">
          <h3 className="footer-title">Navigation</h3>
          <ul className="footer-list">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/looking-for">What I&apos;m Looking For</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Contact</h3>
          <p>Email: george@georgeburslem.com</p>
          <p>Tel: +44 7429 859011</p>
          <h3 className="footer-title">Social</h3>
          <ul className="footer-list">
            <li><a href="https://www.linkedin.com/in/george-burslem-b0572811a/">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-left">
          <p>&copy; George Burslem LLC 2023</p>
        </div>
        <div className="footer-right">
          <p>Made with ❤️ and ☕️ in Edinburgh</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
