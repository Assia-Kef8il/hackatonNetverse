import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        <h2 className="cta-title">Upgrade Your Gym in One Click !</h2>
        <button className="cta-button"
             onClick={() => window.location.href = 'http://localhost:8082/'}
        >Get Started</button>
      </div>
    </section>
  );
};

export default CTA;
