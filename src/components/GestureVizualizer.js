import React, { useEffect, useState } from 'react';

export default function GestureVisualizer({ motionType }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (motionType) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [motionType]);

  if (!visible) return null;

  const iconMap = {
    tap: '🖐️',
    swipeRight: '➡️',
    swipeLeft: '⬅️',
    pressHold: '✋'
  };

  const emoji = iconMap[motionType] || '👆';

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      fontSize: '2em',
      backgroundColor: '#ffffffdd',
      padding: '10px',
      borderRadius: '50%',
      boxShadow: '0 0 10px rgba(0,0,0,0.2)'
    }}>
      {emoji}
    </div>
  );
}