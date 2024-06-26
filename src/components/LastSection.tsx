import React from 'react';
import styles from './LastSection.module.css';
import blogImage from './blog-image.png'; 

const LastSection = () => {
  const blogUrl = 'https://medium.com/@authentixfuel/fortifying-anonymity-and-ensuring-impeccable-user-authenticity-in-blockchain-paradigms-addef30b29c0';

  return (
    <footer className={styles.lastSection}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Dive deep into Authentix</h2>
        <p className={styles.subHeading}>
        Explore more on advanced web3 authentication systems that we are building!
        </p>
        <div className={styles.imageContainer}>
          <a href={blogUrl} className={styles.blogLink} target="_blank" rel="noopener noreferrer">
            <img src={blogImage} alt="Blog Article" className={styles.blogImage} />
            <div className={styles.overlay}>
              <h3 className={styles.blogTitle}>Fuel’s Plug-and-play Proof of Humanity Protocol</h3>
              <p className={styles.blogDate}>- March 29, 2024</p>
            </div>
          </a>
        </div>
      </div>
      <div className={styles.copyRight}>Copyright © 2024 Authentix</div>
    </footer>
  );
};

export default LastSection;
