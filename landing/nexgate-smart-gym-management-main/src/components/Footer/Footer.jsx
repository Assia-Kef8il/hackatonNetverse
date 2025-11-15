import React from "react";
import "./Footer.css";
import logo from "../../assets/footer-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <div className="footer-logo-icon">
            <img src={logo} alt="NexGate Logo" className="logo-img" />
          </div>
          <div className="footer-text">
            <span className="footer-brand">NexGate</span>
            <span className="footer-tagline">
              "Your Gym. Smarter. Faster. Digital."
            </span>
          </div>
          
        </div>
         

        <div className="footer-links">
          <div className="footer-column">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#demo">Demo</a>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#careers">Careers</a>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <a href="#help">Help Center</a>
            <a href="#docs">Documentation</a>
            <a href="#api">API</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 NexGate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
