import React, { useState, useEffect } from 'react';

export default function GestureFeedback({ matchedActions }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (matchedActions.length > 0) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [matchedActions]);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: '#222',
      color: '#fff',
      padding: '12px 20px',
      borderRadius: '8px',
      fontWeight: 'bold'
    }}>
      Triggered: {matchedActions.join(', ')}
    </div>
  );
}