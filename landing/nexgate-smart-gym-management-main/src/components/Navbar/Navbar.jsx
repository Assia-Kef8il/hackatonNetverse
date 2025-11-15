import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/hero-qr-phone.png";
 // your main logo

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo on the left */}
        <div className="navbar-logo">
          <img src={logo} alt="NexGate Logo" className="logo-img" />
          <span className="logo-text">NexGate</span>
          
        </div>

        {/* Mobile toggle button */}
        <button
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#demo">Demo</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Navbar Actions */}
        <div className={`navbar-actions ${isMenuOpen ? "active" : ""}`}>
          <button className="btn-login"      onClick={() => window.location.href = 'http://localhost:8080/'}>Login</button>
          <button className="btn-get-started" onClick={() => window.location.href = 'http://localhost:8082/'}>Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
