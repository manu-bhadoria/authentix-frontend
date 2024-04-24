import React, { useState } from 'react';
import logo from './logo.svg'; 
import styles from './Navbar.module.css';
import { Fuel, FuelWalletConnector } from '@fuel-wallet/sdk';

const Navbar = () => {
  const [fuel, setFuel] = useState<Fuel | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    try {
      const fuelInstance = new Fuel({
        connectors: [new FuelWalletConnector()],
      });
  
      const connectors = await fuelInstance.connectors();
      console.log("Available connectors", connectors);
  
      const connectionState = await fuelInstance.connect();
      console.log("Connection state", connectionState);
  
      if (connectionState) { 
        const accounts = await fuelInstance.accounts();
        console.log("Accounts", accounts);
        setWalletAddress(accounts[0]);
        setFuel(fuelInstance);
      } else {
        throw new Error('Connection failed');
      }
    } catch (error) {
      console.error("Connection failed", error);
    }
  };

  const disconnectWallet = () => {
    setFuel(null);
    setWalletAddress(null);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">
          <img src={logo} alt="Authentix Logo" />
        </a>
      </div>
      <div className={styles.navigation}>
        {walletAddress ? (
          <span className={styles.walletAddress} onClick={disconnectWallet}>
            {walletAddress}
          </span>
        ) : (
          <button className={styles.walletButton} onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
