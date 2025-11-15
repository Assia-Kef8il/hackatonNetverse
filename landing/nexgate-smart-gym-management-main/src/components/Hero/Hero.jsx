import React from 'react';
import './Hero.css';
import heroImage from '@/assets/hero-qr-phone.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Unlock Smarter Access & Seamless<br />
            Gym Management
          </h1>
           <p className="hero-cta-text">
            Upgrade Your Gym in One Click !
          </p>
          <p className="hero-description">
            "Bring your gym into the digital era with AI-powered access control, 
            subscription tracking, and seamless member management."
          </p>
         
          <div className="hero-buttons">
            <button className="hero-btn-primary" onClick={() => window.location.href = 'http://localhost:8082/'}>Get Started</button>
            <button className="hero-btn-secondary">Book a Demo</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="NexGate QR Code Access" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
