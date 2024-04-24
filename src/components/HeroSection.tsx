import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/onboarding'); 
  };

  const handleLearnMoreClick = () => {
    window.open('https://medium.com/@authentixfuel/fortifying-anonymity-and-ensuring-impeccable-user-authenticity-in-blockchain-paradigms-addef30b29c0', '_blank');
  };

  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Authenticate. Verify. Empower.</h1>
      <p className={styles.subtitle}>Authentix is a Proof-of-Humanity protocol for Fuel.<br/>Be Real, Be Recognized, Be Authentix.</p>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={handleGetStartedClick}>Get started</button>
        <button className={styles.button} onClick={handleLearnMoreClick}>Learn more</button>
      </div>
    </div>
  );
};

export default HeroSection;
