import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyAuthentix from './components/WhyAuthentix';
import FeaturesSection from './components/FeaturesSection';
import LastSection from './components/LastSection';
import ProofOfHumanityPage from './components/ProofOfHumanityPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
         
          <Route path="/" element={
            <>
              <HeroSection />
              <WhyAuthentix />
              <FeaturesSection />
              <LastSection />
            </>
          } />
         
          <Route path="/onboarding" element={<ProofOfHumanityPage />} />

         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
