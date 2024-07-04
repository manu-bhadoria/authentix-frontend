import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState('Get started');

  const handleGetStartedClick = () => {
    setButtonText('Coming Soon on Fuel');
    setTimeout(() => {
      setButtonText('Get started');
    }, 2000);
    // Uncomment the line below if you want to navigate after the text changes back
    // navigate('/onboarding'); 
  };

  const handleLearnMoreClick = () => {
    window.open('https://medium.com/@authentixfuel/authentix-complete-sybil-resistance-4ac8aa6011f4', '_blank');
  };

  const handleMouseEnter = () => {
    setButtonText('Coming Soon on Fuel');
  };

  const handleMouseLeave = () => {
    setButtonText('Get started');
  };

  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Authenticate. Verify. Empower.</h1>
      <p className={styles.subtitle}>Authentix is a Proof-of-Humanity protocol for Fuel.<br/>Be Real, Be Recognized, Be Authentix.</p>
      <div className={styles.buttons}>
        <button 
          className={styles.button} 
          onClick={handleGetStartedClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {buttonText}
        </button>
        <button className={styles.button} onClick={handleLearnMoreClick}>Learn more</button>
      </div>
    </div>
  );
};

export default HeroSection;
