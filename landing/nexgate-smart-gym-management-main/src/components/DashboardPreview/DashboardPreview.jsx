import React from 'react';
import './DashboardPreview.css';
import dashboardImg from '@/assets/dashboard-preview.png';

const DashboardPreview = () => {
  return (
    <section className="dashboard-preview">
      <div className="dashboard-container">
        <img 
          src={dashboardImg} 
          alt="NexGate Dashboard Interface" 
          className="dashboard-image"
        />
      </div>
    </section>
  );
};

export default DashboardPreview;
