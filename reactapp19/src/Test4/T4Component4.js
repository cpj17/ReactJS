import React, { useState } from 'react';
import './HorizontalTabs.css'; // Import your CSS file for styling

const HorizontalTabs = ({ tabs, legend }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="horizontal-tabs-container">
      {legend && <legend className="legend">{legend}</legend>}
      <div className="horizontal-tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

// Example usage
const App2 = () => {
  const tabsData = [
    { label: 'Tab 1', content: 'Content for Tab 1' },
    { label: 'Tab 2', content: 'Content for Tab 2' },
    // Add more tabs as needed
  ];

  return (
    <div>
      <HorizontalTabs tabs={tabsData} legend="" />
    </div>
  );
};

export default App2;
