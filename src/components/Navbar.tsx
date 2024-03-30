// src/components/Navbar.tsx
import React from 'react';
import logo from './logo.svg'; // Update the path if necessary
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Authentix Logo" />
      </div>
      <div className={styles.navigation}>
        <a href="" className={styles.link}> </a>
        <a href="" className={styles.link}> </a>
        <button className={styles.walletButton}>Connect Wallet</button>
      </div>
    </nav>
  );
};

export default Navbar;
