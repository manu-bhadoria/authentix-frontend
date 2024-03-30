// src/components/WhyAuthentix.tsx
import React from 'react';
import styles from './WhyAuthentix.module.css';
import sybilIcon from './1.svg';
import incentivesIcon from './2.svg';
import privacyIcon from './3.svg';
import ecosystemIcon from './4.svg';

const WhyAuthentix = () => {
  return (
    <section className={styles.whyAuthentix}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why use Authentix?</h2>
        <p className={styles.subtitle}>
          Leverage Authentix's cutting-edge verification technology to distinguish yourself as a genuine participant
          in the Fuel ecosystem, fostering trust and enabling seamless, secure interactions
        </p>
        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <img src={sybilIcon} alt="Sybil Resistance" className={styles.icon} />
            <h3 className={styles.featureTitle}>Sybil Resistance</h3>
            <p>Authentix bolsters network security against sybil threats with a strong POH foundation.</p>
          </div>
          <div className={styles.feature}>
            <img src={incentivesIcon} alt="Economic Incentives" className={styles.icon} />
            <h3 className={styles.featureTitle}>Economic Incentives</h3>
            <p>Engage with Authentix for rewards that spur network participation and growth</p>
          </div>
          <div className={styles.feature}>
            <img src={privacyIcon} alt="Privacy by Design" className={styles.icon} />
            <h3 className={styles.featureTitle}>Privacy by Design</h3>
            <p>Authentix ensures privacy with zero-knowledge proofs, allowing secure user verification.</p>
          </div>
          <div className={styles.feature}>
            <img src={ecosystemIcon} alt="Ecosystem Synergy" className={styles.icon} />
            <h3 className={styles.featureTitle}>Ecosystem Synergy</h3>
            <p>Authentix boosts network expansion by enhancing user activity and dApp integrations in the Fuel ecosystem.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAuthentix;
