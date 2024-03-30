import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/onboarding'); 
  };
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Authenticate. Verify. Empower.</h1>
      <p className={styles.subtitle}>Authentix is a Proof-of-Humanity protocol for Fuel.<br/>Be Real, Be Recognized, Be Authentix.</p>
      <div className={styles.buttons}>
      <button className={styles.button} onClick={handleGetStartedClick}>Get started</button>
        <button className={styles.button}>Learn more</button>
      </div>
    </div>
  );
};

export default HeroSection;
