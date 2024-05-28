import React from 'react';

const Tab = ({ label, content, isActive, setActiveTab }) => (
  <div>
    <button
      style={isActive ? { fontWeight: 'bold' } : {}}
      onClick={() => setActiveTab(label)}
    >
      {label}
    </button>
    {isActive && <div>{content}</div>}
  </div>
);

export default Tab;