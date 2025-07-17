import React, { useState } from 'react';
import ZoneForm from '../components/ZoneForm';
import DeviceSelector from '../components/DeviceSelector';

const handleZoneAdd = newZone => {
  console.log('New Zone Created:', newZone);
  // Optionally: push to context or backend via POST /zones
};

<ZoneForm onAddZone={handleZoneAdd} />

const mockDevices = [
  { id: 'dev-01', name: 'Hue Light', type: 'Light' },
  { id: 'dev-02', name: 'Nest Speaker', type: 'Speaker' },
];

const ZoneConfigurationScreen = () => {
  const [zoneAssignments, setZoneAssignments] = useState([]);

  const handleAssign = (zone, deviceId) => {
    setZoneAssignments(prev => [...prev, { zone, deviceId }]);
    console.log('Assigned:', zone, deviceId);
  };

  return (
    <div>
      <h2>Configure Zone Devices</h2>
      <DeviceSelector availableDevices={mockDevices} onAssign={handleAssign} />

      <h4>Current Assignments:</h4>
      <ul>
        {zoneAssignments.map((entry, index) => (
          <li key={index}>
            {entry.deviceId} ➝ {entry.zone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ZoneConfigurationScreen;