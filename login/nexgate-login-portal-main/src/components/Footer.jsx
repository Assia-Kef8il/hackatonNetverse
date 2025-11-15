import React from 'react';
import './Footer.css';
import nexgateLogo from '../assets/footer-logo.png';

/**
 * Footer Component
 * Dark blue footer with 3 columns:
 * - Column 1: Logo and slogan
 * - Column 2: Navigation links
 * - Column 3: Contact information
 */
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Column 1: Logo and slogan */}
        <div className="footer-column-1">
          <img src={nexgateLogo} alt="NexGate Logo" className="footer-logo" />
          <p className="footer-slogan">
            " Your Gym, Smarter. Faster. Digital. "
          </p>
        </div>

        {/* Column 2: Navigation links */}
        <div className="footer-column-2">
          <a href="#home">Home</a>
          <a href="#about">About NexGate</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#login">Login / Sign Up</a>
        </div>

        {/* Column 3: Contact information */}
        <div className="footer-column-3">
          <div className="footer-column-3-title">Contact</div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">📧</span>
            <span>contact@nexgate.com</span>
          </div>
          <div className="footer-column-3-title">Support</div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">📍</span>
            <span>NEXGATE HQ — Algeria</span>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">📞</span>
            <span>+213 000 000 000</span>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2025 NexGate. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
