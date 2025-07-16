// src/components/ZoneDashboard.js
import React, { useState } from 'react';
import { useZone } from '../context/ZoneContext';
import TouchConfigurator from './TouchConfigurator';
import PatternCard from './PatternCard'; // New component for visual pattern display
import GestureSimulator from './GestureSimulator';

const ZoneDashboard = () => {
  const { zones, updateZoneTouchPatterns, toggleZone } = useZone();
  const [activeZone, setActiveZone] = useState(null);
  const [highlightedZone, setHighlightedZone] = useState(null);

  const handleAddPattern = (zoneName) => {
    setActiveZone(zoneName);
  };

  const handleTogglePattern = (zoneName, patternId) => {
    const updated = zones[zoneName].touchPatterns.map(p =>
      p.id === patternId ? { ...p, active: !p.active } : p
    );
    updateZoneTouchPatterns(zoneName, updated);
  };

  return (
    <div>
      <h2>Zone Dashboard</h2>
      {Object.entries(zones).map(([zoneName, data]) => (
        <div
          key={zoneName}
          style={{
            border: '1px solid #ccc',
            padding: '1em',
            margin: '1em 0',
            borderRadius: '8px'
          }}
        >
          <h3>{zoneName}</h3>
          <p>Status: {data.active ? 'Active ✅' : 'Inactive ❌'}</p>

          <p><strong>Configured Touch Patterns:</strong></p>
          {data.touchPatterns.length > 0 ? (
            data.touchPatterns.map((pattern) => (
              <PatternCard
                key={pattern.id}
                pattern={pattern}
                onToggle={() => handleTogglePattern(zoneName, pattern.id)}
                isHighlighted={highlightedZone === zoneName}
              />
            ))
          ) : (
            <p>No patterns configured.</p>
          )}

          <button onClick={() => toggleZone(zoneName)}>
            {data.active ? 'Disable Zone' : 'Enable Zone'}
          </button>

          <button onClick={() => handleAddPattern(zoneName)} style={{ marginLeft: '1em' }}>
            Add Pattern
          </button>
        </div>
      ))}

      <GestureSimulator />

      {activeZone && (
        <TouchConfigurator
          zoneName={activeZone}
          onClose={() => setActiveZone(null)}
        />
      )}
    </div>
  );
};

return (
  <ZoneContext.Provider value={{
    zones,
    setZones,
    updateZoneTouchPatterns,
    toggleZone,
    highlightedZone,
    setHighlightedZone
  }}>
    {children}
  </ZoneContext.Provider>
);
export default ZoneDashboard;