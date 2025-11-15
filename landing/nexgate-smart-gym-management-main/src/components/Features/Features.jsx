import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: 'Smart Management',
      description: 'Members, staff, subscriptions, branches.',
      bgColor: '#DFE3FA',
      icon: '📊'
    },
    {
      title: 'Digital Identity',
      description: 'QR codes, NFC cards, wallet ID.',
      bgColor: '#FDEBA1',
      icon: '📱'
    },
    {
      title: 'Smart Access Control',
      description: 'Door unlock + time rules, office mode.',
      bgColor: '#BCD5FC',
      icon: '🚪'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Everything You Need,<br />In One Platform</h2>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ background: feature.bgColor }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Features;
