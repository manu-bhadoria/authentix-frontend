// src/components/HeroSection.tsx
import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Authenticate. Verify. Empower.</h1>
      <p className={styles.subtitle}>Authentix is a Proof-of-Humanity protocol for Fuel.<br/>Be Real, Be Recognized, Be Authentix.</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Get started</button>
        <button className={styles.button}>Learn more</button>
      </div>
    </div>
  );
};

export default HeroSection;
