import React from 'react';

export default function PatternCard({ pattern, onToggle, isHighlighted }) {
  const { fingers, motion, actions, active, id } = pattern;

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: isHighlighted ? '#ffffcc' : active ? '#dff0d8' : '#f2dede',
      border: isHighlighted ? '2px solid #ffd700' : 'none',
      padding: '12px',
      marginBottom: '8px',
      borderRadius: '8px'
    }}>
      <div>
        <strong>{fingers}-finger {motion}</strong><br />
        <small>→ {actions.join(', ')}</small>
      </div>
      <button
        style={{
          padding: '6px 12px',
          background: active ? '#5cb85c' : '#d9534f',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
        onClick={() => onToggle(id)}
      >
        {active ? 'Disable' : 'Enable'}
      </button>
    </div>
  );
}