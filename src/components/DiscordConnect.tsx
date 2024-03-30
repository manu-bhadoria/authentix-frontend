import React, { useState } from 'react';
import './SocialConnect.css'; 

interface DiscordConnectProps {
  onSuccess: () => void;
}

const DiscordConnect: React.FC<DiscordConnectProps> = ({ onSuccess }) => {
  const [connected, setConnected] = useState<boolean>(false);

  const connectDiscord = () => {
   
    setConnected(true);
    onSuccess(); 
  };

  return (
    <div>
      {connected ? (
        <p>Connected to Discord</p>
      ) : (
        <button onClick={connectDiscord}>Connect Discord</button>
      )}
    </div>
  );
};

export default DiscordConnect;
