// src/components/ZoneDashboard.js
import React from 'react';
import { useZone } from '../context/ZoneContext';

const ZoneDashboard = () => {
  const { zones, updateZoneGestures, toggleZone } = useZone();

  return (
    <div>
      <h2>Zone Dashboard</h2>
      {Object.entries(zones).map(([zoneName, data]) => (
        <div key={zoneName} style={{ border: '1px solid #ccc', padding: '1em', margin: '1em 0' }}>
          <h3>{zoneName}</h3>
          <p>Status: {data.active ? 'Active ✅' : 'Inactive ❌'}</p>
          <p>Gestures: {data.gestures.join(', ') || 'None'}</p>

          <button onClick={() => toggleZone(zoneName)}>
            {data.active ? 'Disable Zone' : 'Enable Zone'}
          </button>

          <button
            onClick={() =>
              updateZoneGestures(zoneName, [...data.gestures, 'raiseHand']) // example gesture addition
            }
            style={{ marginLeft: '1em' }}
          >
            Add Gesture
          </button>
        </div>
      ))}
    </div>
  );
};

export default ZoneDashboard;