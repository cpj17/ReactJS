// VerticalTabs.js

import React, { useState } from 'react';
import './VerticalTabs.css'; // Import the CSS file

const VerticalTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="vertical-tabs-container">
      <div className="vertical-tabs">
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
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

const App = () => {
    const tabs = [
      { label: 'Tab 1', content: 'Content for Tab 1' },
      { label: 'Tab 2', content: 'Content for Tab 2 ghfddddddddddddddddddd fdhghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghg fghd kjfghhggggggggkjgfhjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk gfjjjjjjjjjjjjjjjjjj hggggggggg' },
      { label: 'Tab 3', content: 'Content for Tab 3' },
    ];
  
    return (
      <div style={{float: 'left'}}>
        <h1>Vertical Tabs Example</h1>
        <VerticalTabs tabs={tabs} />
      </div>
    );
  };

export default App;
