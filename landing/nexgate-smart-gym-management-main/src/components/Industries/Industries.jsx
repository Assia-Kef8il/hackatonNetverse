import React, { useState } from 'react';
import './Industries.css';

const Industries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const industries = [
    { name: 'Gyms & Fitness', icon: '💪', color: '#4ade80' },
    { name: 'Sports Clubs', icon: '⚽', color: '#f87171' },
    { name: 'Academies', icon: '🎓', color: '#60a5fa' },
    { name: 'Wellness Centers', icon: '🧘', color: '#a78bfa' },
  ];

  const totalIndustries = industries.length;

  // Function to get the index for the card to the left (previous)
  const getPrevIndex = (index) => (index - 1 + totalIndustries) % totalIndustries;

  // Function to get the index for the card to the right (next)
  const getNextIndex = (index) => (index + 1) % totalIndustries;

  // The indexes to display: left, center (main), and right
  const prevIndex = getPrevIndex(currentIndex);
  const nextIndex = getNextIndex(currentIndex);

  const visibleIndices = [prevIndex, currentIndex, nextIndex];

  // Function to handle clicking on a card
  const handleCardClick = (index) => {
    // Only navigate if the clicked card is not the current (center) one
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  return (
    <section className="industries">
      <div className="industries-container">
        <h2 className="industries-title">Built for Many Industries ..</h2>
        
        <div className="slider-wrapper-multi">
          
          {visibleIndices.map((index, position) => {
            const industry = industries[index];
            const isMain = position === 1; // Center card is the main one

            return (
              <div 
                key={index}
                className={`industry-card-wrapper ${isMain ? 'main-card' : 'side-card'}`}
                onClick={() => handleCardClick(index)}
              >
                <div 
                  className="industry-card" 
                  style={{ borderColor: industry.color }}
                >
                  <div className="industry-icon" style={{ background: industry.color }}>
                    {industry.icon}
                  </div>
                  <h3 className="industry-name">{industry.name}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="slider-dots">
          {industries.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;