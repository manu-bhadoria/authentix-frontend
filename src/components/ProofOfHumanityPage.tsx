import React, { useState } from 'react';
import axios from 'axios'; 
import CaptchaVerify from './CaptchaVerify';
import DiscordConnect from './DiscordConnect';
import TwitterConnect from './TwitterConnect';
import { useNavigate } from 'react-router-dom';
import './SocialConnect.css';
import './ProofOfHumanityPage.css';

const ProofOfHumanityPage = () => {
  const [step, setStep] = useState(1);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

 
  const handleCaptchaSuccess = () => {
    console.log('Captcha verified.');
    setStep(step + 1); 
  };

 
  const handleDiscordSuccess = () => {
    console.log('Discord connected.');
    setStep(step + 1);
  };

 
  const handleTwitterSuccess = () => {
    console.log('Twitter connected.');
    navigate('/next-route-after-verification');
  };
  const handleBotVerification = async () => {
    try {
      const response = await axios.post('/.netlify/functions/server', {
        data: null,
      });
  
      if (response.data.verified) {
        setIsVerified(true);
      } else {
        alert('Bot verification failed. Please try again.');
      }
    } catch (error) {
      console.error('Bot verification error:', error);
      alert('There was an error verifying the bot. Please try again.');
    }
  };
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const handleWalletConnect = async () => {

    setIsWalletConnected(true);
  };

  
  return (
    <div className="proof-of-humanity-page">
      <h1>Complete the steps to verify your humanity</h1>
      <h2>1. Captcha</h2>
      {step === 1 && <CaptchaVerify onSuccess={handleCaptchaSuccess} />}
      {step === 2 && <DiscordConnect onSuccess={handleDiscordSuccess} />}
      {step === 3 && <TwitterConnect onSuccess={handleTwitterSuccess} />}
      <h2>2. Bot verification</h2>
      <div className="bot-verification">
        <p>Click on the button to verify that your mouse movements and other behaviors are non-bot like</p>
        <button
          className={`verify-button ${isVerified ? 'verified' : ''}`}
          onClick={handleBotVerification}
          disabled={isVerified}
        >
          {isVerified ? 'Verified' : 'Verify'}
        </button>
      </div>
      <footer>
        <p>Copyright © 2024 authentix</p>
      </footer>
    </div>
  );
};

export default ProofOfHumanityPage;