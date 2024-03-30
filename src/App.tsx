// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyAuthentix from './components/WhyAuthentix';
import './App.css';
import FeaturesSection from './components/FeaturesSection';
import LastSection from './components/LastSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <WhyAuthentix />
      <FeaturesSection />
      {/* Add other sections as needed */}
      <LastSection />
    </div>
  );
}

export default App;
