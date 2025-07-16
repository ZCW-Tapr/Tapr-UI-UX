import React, { useState, useContext } from 'react';
import { useZone } from '../context/ZoneContext';
import { routeTouch } from '../utils/TouchRouter';
import GestureVisualizer from './GestureVisualizer';

export default function GestureSimulator() {
  const { zones, setHighlightedZone } = useZone();
  const [fingers, setFingers] = useState(1);
  const [motion, setMotion] = useState('tap');
  const [result, setResult] = useState([]);

  
  const handleSimulate = () => {
  const zoneNames = Object.keys(zones);
  let matchedZone = null;
  let matchedActions = [];

  for (let zoneName of zoneNames) {
    const actions = routeTouch({ [zoneName]: zones[zoneName] }, fingers, motion);
    if (actions.length > 0) {
      matchedZone = zoneName;
      matchedActions = actions;
      break; // You can collect multiple zones if needed
    }
  }

  setHighlightedZone(matchedZone);
  setResult(matchedActions);
};


  return (
    <div style={{
      border: '1px solid #444',
      padding: '1em',
      marginTop: '2em',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <GestureVisualizer motionType={motion} />

      <h4>Gesture Simulator</h4>
      <label>Finger Count:</label>
      <input
        type="number"
        value={fingers}
        min={1}
        max={5}
        onChange={e => setFingers(Number(e.target.value))}
        style={{ marginRight: '1em' }}
      />
      <label>Motion Type:</label>
      <select
        value={motion}
        onChange={e => setMotion(e.target.value)}
        style={{ marginRight: '1em' }}
      >
        <option value="tap">tap</option>
        <option value="swipeRight">swipeRight</option>
        <option value="swipeLeft">swipeLeft</option>
        <option value="pressHold">pressHold</option>
      </select>
      <button onClick={handleSimulate}>Simulate Gesture</button>

      {result.length > 0 && (
        <div style={{
          marginTop: '1em',
          padding: '1em',
          backgroundColor: '#e0ffe0',
          border: '1px solid #ccc',
          borderRadius: '6px'
        }}>
          <strong>Matched Actions:</strong>
          <ul>
            {result.map((action, idx) => (
              <li key={idx}>{action}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}