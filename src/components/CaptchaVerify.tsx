import React, { useState, useEffect, useRef } from 'react';
import './SocialConnect.css';

interface CaptchaVerifyProps {
  onSuccess: () => void; 
}

const CaptchaVerify: React.FC<CaptchaVerifyProps> = ({ onSuccess }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [captchaText, setCaptchaText] = useState<string>('');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    createCaptcha();
  }, []);

  const clearScreen = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  const createCaptcha = () => {
    clearScreen();
    const charsArray =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lengthOtp = 6; 
    let captcha = "";
    for (let i = 0; i < lengthOtp; i++) {
      const index = Math.floor(Math.random() * charsArray.length);
      captcha += charsArray[index];
    }
    setCaptchaText(captcha);
    addTextToCanvas(captcha);
  };

  const addTextToCanvas = (text: string) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        context.font = "25px Arial";
        context.fillStyle = "#FF0000";
        context.fillText(text, 10, canvas.height / 2);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const verifyCaptcha = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue === captchaText) {
      onSuccess(); 
    } else {
      alert("Captcha Mismatch. Please try again.");
      setInputValue('');
      createCaptcha();
    }
  };

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
    </div>
  );
};

export default CaptchaVerify;
