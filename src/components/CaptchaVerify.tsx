import React, { useState, useRef } from 'react';
import { createCaptcha } from 'freecaptcha';
import './SocialConnect.css';

interface CaptchaVerifyProps {
  onSuccess: () => void;
}

const CaptchaVerify: React.FC<CaptchaVerifyProps> = ({ onSuccess }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [captchaValue, setCaptchaValue] = useState<string>('');

  const generateCaptcha = () => {
    if (canvasRef.current) {
      const captchaText = createCaptcha(canvasRef.current);
      setCaptchaValue(captchaText);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const verifyCaptcha = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue === captchaValue) {
      onSuccess();
    } else {
      alert("Captcha Mismatch. Please try again.");
      setInputValue('');
      generateCaptcha(); 
    }
  };

  React.useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div className="captcha-verify">
      <canvas ref={canvasRef} width="200" height="100" style={{border: '1px solid #ddd', marginBottom: '10px'}} />
      <form onSubmit={verifyCaptcha}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter Captcha"
          aria-label="Enter Captcha"
        />
        <button type="submit">Verify Captcha</button>
      </form>
      <button onClick={generateCaptcha}>Refresh Captcha</button>
    </div>
  );
};

export default CaptchaVerify;
