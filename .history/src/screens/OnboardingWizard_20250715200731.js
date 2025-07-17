import React, { useState } from 'react';
import { useZone } from '../context/ZoneContext';
import TouchConfigurator from '../components/TouchConfigurator';

export default function OnboardingWizard({ onComplete }) {
  const { zones, updateZoneTouchPatterns, toggleZone } = useZone();
  const [step, setStep] = useState(0);
  const [zoneName, setZoneName] = useState('');

  const handleCreateZone = () => {
    const newZone = {
      touchPatterns: [],
      active: true,
    };
    updateZoneTouchPatterns(zoneName, newZone);
    toggleZone(zoneName); // make it active
    setStep(1);
  };

  const handleFinish = () => {
    setStep(2);
    onComplete(); // exit wizard
  };

  return (
    <div style={{ padding: '2em' }}>
      {step === 0 && (
        <>
          <h3>Welcome to Tapr</h3>
          <p>Let’s create your first zone.</p>
          <input
            type="text"
            placeholder="e.g. Kitchen"
            value={zoneName}
            onChange={e => setZoneName(e.target.value)}
          />
          <button onClick={handleCreateZone} disabled={!zoneName.trim()}>
            Create Zone
          </button>
        </>
      )}

      {step === 1 && (
        <>
          <h3>Configure Touch Pattern</h3>
          <TouchConfigurator
            zoneName={zoneName}
            onClose={handleFinish}
          />
        </>
      )}

      {step === 2 && (
        <>
          <h3>All Set 🎉</h3>
          <p>You’ve created the <strong>{zoneName}</strong> zone and added a gesture pattern.</p>
          <button onClick={onComplete}>Enter Dashboard</button>
        </>
      )}
    </div>
  );
}