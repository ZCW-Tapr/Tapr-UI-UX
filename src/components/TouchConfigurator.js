import React, { useState } from 'react';
import { useZone } from '../context/ZoneContext';

const motions = ['tap', 'pressHold', 'swipeLeft', 'swipeRight'];

export default function TouchConfigurator({ zoneName, onClose }) {
  const { zones, updateZoneTouchPatterns } = useZone();
  const [fingers, setFingers] = useState(1);
  const [motion, setMotion] = useState('tap');
  const [actionsText, setActionsText] = useState('');

  const handleSave = () => {
    const newPattern = {
      id: Date.now(),
      fingers,
      motion,
      actions: actionsText.split(',').map(s => s.trim()),
      active: true
    };

    const updated = [...zones[zoneName].touchPatterns, newPattern];
    updateZoneTouchPatterns(zoneName, updated);
    onClose();
  };

  return (
    <div className="touch-configurator">
      <h3>Configure gesture for {zoneName}</h3>

      <label>
        Fingers:
        <select value={fingers} onChange={e => setFingers(+e.target.value)}>
          {[1,2,3].map(n => <option key={n} value={n}>{n}</option>)}
        </select>
      </label>

      <label>
        Motion:
        <select value={motion} onChange={e => setMotion(e.target.value)}>
          {motions.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
      </label>

      <label>
        Actions (comma-separated):
        <input
          type="text"
          value={actionsText}
          onChange={e => setActionsText(e.target.value)}
          placeholder="lights.toggle, speaker.playAmbient"
        />
      </label>

      <button onClick={handleSave}>Save Pattern</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}