import { createContext, useState } from 'react';

export const UserSetupContext = createContext();

export const UserSetupProvider = ({ children }) => {
  const [gesturePrefs, setGesturePrefs] = useState({
    fingerCount: 1,
    gestureType: 'tap',
    swipeDirection: 'horizontal',
  });

  return (
    <UserSetupContext.Provider value={{ gesturePrefs, setGesturePrefs }}>
      {children}
    </UserSetupContext.Provider>
  );
};