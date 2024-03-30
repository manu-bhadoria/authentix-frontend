import React, { useState } from 'react';
import './SocialConnect.css';

const GitHubConnect: React.FC = () => {
  const [connected, setConnected] = useState<boolean>(false);

  const connectGitHub = () => {
   
    setConnected(true);
  };

  return (
    <div>
      {connected ? (
        <p>Connected to GitHub</p>
      ) : (
        <button onClick={connectGitHub}>Connect GitHub</button>
      )}
    </div>
  );
};

export default GitHubConnect;
