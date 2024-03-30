// ProofOfHumanityPage.tsx
import React, { useState } from 'react';
import CaptchaVerify from './CaptchaVerify';
import DiscordConnect from './DiscordConnect';
import TwitterConnect from './TwitterConnect';
import { useNavigate } from 'react-router-dom';
import './SocialConnect.css';

const ProofOfHumanityPage = () => {
  const [step, setStep] = useState(1);
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

  return (
    <div className="proof-of-humanity-page">
      <h1>Complete the steps to verify your humanity</h1>
      {step === 1 && <CaptchaVerify onSuccess={handleCaptchaSuccess} />}
      {step === 2 && <DiscordConnect onSuccess={handleDiscordSuccess} />}
      {step === 3 && <TwitterConnect onSuccess={handleTwitterSuccess} />}
     
    </div>
  );
};

export default ProofOfHumanityPage;
