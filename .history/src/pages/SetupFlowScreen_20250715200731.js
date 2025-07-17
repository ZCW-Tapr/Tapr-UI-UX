// src/pages/SetupFlowScreen.js
import React from 'react';
import GestureConfig from '../components/GestureConfig';
import { useNavigate } from 'react-router-dom';

const SetupFlowScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="setup-flow-screen">
      <header>
        <h1>Tapr Setup Wizard</h1>
        <p>Step 3: Choose Your Gesture Preferences</p>
      </header>

      <main>
        <GestureConfig />
      </main>

      <footer>
        <button onClick={() => navigate('/previous-step')}>Back</button>
        <button onClick={() => navigate('/next-step')}>Next</button>
      </footer>
    </div>
  );
};

export default SetupFlowScreen;