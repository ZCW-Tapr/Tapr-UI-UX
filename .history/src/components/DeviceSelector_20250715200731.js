import React, { useState } from 'react';

const DeviceSelector = ({ availableDevices, onAssign }) => {
  const [selectedZone, setSelectedZone] = useState('');
  const [selectedDeviceId, setSelectedDeviceId] = useState('');

  return (
    <div className="device-selector">
      <h3>Link Devices to Zone</h3>

      <label>Choose Zone:</label>
      <select value={selectedZone} onChange={e => setSelectedZone(e.target.value)}>
        <option value="">-- Select Zone --</option>
        <option value="living-room">Living Room</option>
        <option value="kitchen">Kitchen</option>
        <option value="office">Office</option>
      </select>

      <label>Choose Device:</label>
      <select value={selectedDeviceId} onChange={e => setSelectedDeviceId(e.target.value)}>
        <option value="">-- Select Device --</option>
        {availableDevices.map(device => (
          <option key={device.id} value={device.id}>
            {device.name} ({device.type})
          </option>
        ))}
      </select>

      <button
        disabled={!selectedZone || !selectedDeviceId}
        onClick={() => onAssign(selectedZone, selectedDeviceId)}
      >
        Assign Device to Zone
      </button>
    </div>
  );
};

export default DeviceSelector;