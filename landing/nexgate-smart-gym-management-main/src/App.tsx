import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import DashboardPreview from './components/DashboardPreview/DashboardPreview';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Features from './components/Features/Features';
import Industries from './components/Industries/Industries';
import WhyBetter from './components/WhyBetter/WhyBetter';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <DashboardPreview />
      <HowItWorks />
      <Features />
      <Industries />
      <WhyBetter />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
