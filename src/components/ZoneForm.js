import React, { useState } from 'react';

const ZoneForm = ({ onAddZone }) => {
  const [zoneName, setZoneName] = useState('');
  const [zones, setZones] = useState([]);

  const handleAddZone = () => {
    if (!zoneName.trim()) return;
    const newZone = { id: Date.now(), name: zoneName };
    setZones(prev => [...prev, newZone]);
    onAddZone(newZone); // Pass to parent for context or backend usage
    setZoneName('');
  };

  return (
    <div className="zone-form">
      <h3>Create a New Zone</h3>

      <input
        type="text"
        placeholder="e.g. Kitchen, Living Room"
        value={zoneName}
        onChange={e => setZoneName(e.target.value)}
      />

      <button onClick={handleAddZone}>Add Zone</button>

      <h4>Your Zones:</h4>
      <ul>
        {zones.map(zone => (
          <li key={zone.id}>{zone.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ZoneForm;