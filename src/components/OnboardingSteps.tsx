import React, { useState } from 'react';
import CaptchaVerify from '../components/CaptchaVerify';
import DiscordConnect from '../components/DiscordConnect';
import TwitterConnect from '../components/TwitterConnect';

const OnboardingSteps = () => {
  const [step, setStep] = useState(1);

  const handleCaptchaSuccess = () => {
    setStep(2); 
  };

  const handleDiscordSuccess = () => {
    setStep(3);
  };

  const handleTwitterSuccess = () => {
   
    alert("Onboarding completed successfully!");
  };

  return (
    <div>
      {step === 1 && <CaptchaVerify onSuccess={handleCaptchaSuccess} />}
      {step === 2 && <DiscordConnect onSuccess={handleDiscordSuccess} />}
      {step === 3 && <TwitterConnect onSuccess={handleTwitterSuccess} />}
    </div>
  );
};

export default OnboardingSteps;
