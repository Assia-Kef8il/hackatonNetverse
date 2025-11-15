import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Register',
      description: 'Create and organization profile'
    },
    {
      number: 2,
      title: 'Add Members',
      description: 'Import or manually add members with subscriptions'
    },
    {
      number: 3,
      title: 'Manage & Control',
      description: 'All-in-one access control, analytics and user analytics'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="how-container">
        <h2 className="how-title">How NexGate Works ?</h2>
        
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.number} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>

        <p className="how-tagline">
          " From entry to payment, everything co-nnected "
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
