import React, { useContext } from 'react';
import { UserSetupContext } from '../context/UserSetupContext';

const GestureConfig = () => {
  const { gesturePrefs, setGesturePrefs } = useContext(UserSetupContext);

  const handleChange = (field, value) => {
    setGesturePrefs(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="gesture-config">
      <h2>Gesture Preferences</h2>

      <label>Finger Count:</label>
      <select
        value={gesturePrefs.fingerCount}
        onChange={e => handleChange('fingerCount', parseInt(e.target.value))}
      >
        <option value={1}>1 Finger</option>
        <option value={2}>2 Fingers</option>
        <option value={3}>3 Fingers</option>
      </select>

      <label>Gesture Type:</label>
      <select
        value={gesturePrefs.gestureType}
        onChange={e => handleChange('gestureType', e.target.value)}
      >
        <option value="tap">Tap</option>
        <option value="swipe">Swipe</option>
      </select>

      {gesturePrefs.gestureType === 'swipe' && (
        <>
          <label>Swipe Direction:</label>
          <select
            value={gesturePrefs.swipeDirection}
            onChange={e => handleChange('swipeDirection', e.target.value)}
          >
            <option value="horizontal">Horizontal</option>
            <option value="vertical">Vertical</option>
            <option value="diagonal">Diagonal</option>
            <option value="pattern">Pattern</option>
          </select>
        </>
      )}

      <button onClick={() => console.log('Saved:', gesturePrefs)}>
        Save Preferences
      </button>
    </div>
  );
};

export default GestureConfig;