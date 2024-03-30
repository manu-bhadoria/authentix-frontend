import React, { useState } from 'react';
import styles from './FeaturesSection.module.css';
import behavioralIcon from './5.svg';
import didIcon from './6.svg';
import verificationIcon from './7.svg';
import governanceIcon from './8.svg';
import privacyIcon from './9.svg';
import behavioralImage from './10.png'; 
import didImage from './11.png'; 
import verificationImage from './12.png'; 
import governanceImage from './13.png'; 
import privacyImage from './14.png'; 


const features = {
    behavioral: {
      title: "Sophisticated Behavioral Analysis",
      content: "Implementing machine learning algorithms to monitor and analyze user behavior continuously, providing a nuanced layer of verification that transcends static methods like CAPTCHA.",
      icon: behavioralIcon,
      image: behavioralImage,
    },
    did: {
        title: "Decentralized Identity (DID) Integration",
        content: "Enabling DID service providers to be able to integrate with the app whereby the users can establish and manage their blockchain-based identities, empowering them to control and selectively share their verification status, thus enhancing privacy and trust.",
        icon: didIcon,
        image: didImage,
      },
    verification: {
        title: "Continuous Verification Mechanism",
        content: "Introduce a dynamic system where PoH can be used for one-time-only authentication (OTOA) or require a regular time based renewal or Time Based Authentication (TBA), ensuring that the authentication remains active,  thereby enhancing the system's credibility and reliability.",
        icon: verificationIcon,
        image: verificationImage,
        }, 
    governance: {
        title: "Plug-n-play Integration with Governance Platforms",
        content: "Develop modules for seamless integration with DAOs and other governance platforms, ensuring that participation is restricted to verified humans, thus upholding the integrity and fairness of the governance processes.",
        icon: governanceIcon,
        image: governanceImage,
        },
    privacy: {
        title: "Privacy preserving",
        content: "A zero-knowledge style mechanism that ensures the linkages exist with Twitter, Discord etc but doesn’t map or store them.",
        icon: privacyIcon,
        image: privacyImage,
        },
  };
  
  type FeatureKey = 'behavioral' | 'did' | 'verification' | 'governance' | 'privacy';  
  const FeaturesSection = () => {
    const [activeFeature, setActiveFeature] = useState<FeatureKey | null>('behavioral');
    
    const toggleFeature = (featureKey: FeatureKey) => {
      setActiveFeature(activeFeature === featureKey ? null : featureKey);
    };
  
    return (
        <section className={styles.features}>
          <div className={styles.featuresList}>
            <h2 className={styles.title}>Features</h2>
            <p className={styles.subtitle}>Unveiling next-generation identity verification for a digital world - secure, seamless, and decentralized.</p>
            {Object.keys(features).map((key) => {
              const featureKey = key as FeatureKey;
              
              const isOpen = activeFeature === featureKey;
              return (
                <div key={featureKey} className={styles.featureItem}>
                  <button
                    className={`${styles.featureTitle} ${isOpen ? styles.active : ''}`}
                    onClick={() => toggleFeature(featureKey)}
                    aria-expanded={isOpen}
                  >
                    <img src={features[featureKey].icon} alt={featureKey} className={styles.icon} />
                    {features[featureKey].title}
                    <span className={styles.dropdownIcon}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                 
                  {isOpen && (
                    <div className={`${styles.featureContent} ${isOpen ? styles.show : ''}`}>
                      {features[featureKey].content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className={styles.featureVisualization}>
           
            <img src={activeFeature ? features[activeFeature].image : features['behavioral'].image} alt={`${activeFeature || 'behavioral'} visualization`} />
          </div>
        </section>
      );
    };
    
    export default FeaturesSection;