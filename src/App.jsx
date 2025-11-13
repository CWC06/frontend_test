import React from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './sections/HeroSection.jsx';
import FeaturesSection from './sections/FeaturesSection.jsx';
import InsightsSection from './sections/InsightsSection.jsx';
import TestimonialsSection from './sections/TestimonialsSection.jsx';
import WorkflowSection from './sections/WorkflowSection.jsx';
import CTASection from './sections/CTASection.jsx';
import Footer from './components/Footer.jsx';
import './styles/App.css';

const App = () => {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <InsightsSection />
        <WorkflowSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
