import React, { useState } from 'react';
import './SocialConnect.css'; 

interface TwitterConnectProps {
  onSuccess: () => void; 
}

const TwitterConnect: React.FC<TwitterConnectProps> = ({ onSuccess }) => {
  const [connected, setConnected] = useState<boolean>(false);

  const connectTwitter = () => {
    
    setConnected(true);
    onSuccess(); 
  };

  return (
    <div>
      {connected ? (
        <p>Connected to Twitter</p>
      ) : (
        <button onClick={connectTwitter}>Connect Twitter</button>
      )}
    </div>
  );
};

export default TwitterConnect;
