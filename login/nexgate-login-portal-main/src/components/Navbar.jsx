import React from 'react';
import './Navbar.css';
import nexgateLogo from '../assets/nexgate-logo.png';

/**
 * Navbar Component
 * Top navigation bar with logo, back button, and navigation links
 * Uses light blue background color from the design palette
 */
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left section: Logo and back arrow */}
      <div className="navbar-left">
        <div className="navbar-logo-container">
          <span className="navbar-back-arrow">←</span>
          <img src={nexgateLogo} alt="NexGate Logo" className="navbar-logo" />
        </div>
      </div>

      {/* Right section: Navigation links */}
      <div className="navbar-links">
        <a href="#accueil">Accueil</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#demo">Demo</a>
      </div>
    </nav>
  );
};

export default Navbar;
