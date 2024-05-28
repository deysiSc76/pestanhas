import React, { useState } from 'react';
import Tab from './Tab'; // Importa el componente Tab

const Tabs = ({ items }) => {
  const [activeTab, setActiveTab] = useState(items[0].label);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {items.map((item) => (
          <Tab
            key={item.label}
            label={item.label}
            content={item.content}
            isActive={activeTab === item.label}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
      <div style={{ marginTop: '20px' }}>
        {items.map((item) => {
          if (item.label === activeTab) {
            return <div key={item.label}>{item.content}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Tabs;