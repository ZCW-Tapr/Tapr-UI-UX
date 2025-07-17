import { useState, useEffect, createContext, useContext } from 'react';
import { loadZones, saveZones } from './localStorage';
import zoneData from '../../docs/touch-mapping-schema.json';

const ZoneContext = createContext();

export const ZoneProvider = ({ children }) => {
  const initialZones = loadZones() || zoneData;
  const [zones, setZones] = useState(initialZones);

  useEffect(() => {
    saveZones(zones);
  }, [zones]);

  const updateZoneTouchPatterns = (zoneName, newPatterns) => {
    setZones(prev => ({
      ...prev,
      [zoneName]: {
        ...prev[zoneName],
        touchPatterns: newPatterns
      }
    }));
  };

  const toggleZone = (zoneName) => {
    setZones(prev => ({
      ...prev,
      [zoneName]: {
        ...prev[zoneName],
        active: !prev[zoneName].active
      }
    }));
  };

  return (
    <ZoneContext.Provider value={{ zones, setZones, updateZoneTouchPatterns, toggleZone }}>
      {children}
    </ZoneContext.Provider>
  );
};

export const useZone = () => useContext(ZoneContext);