import React, { useState } from "react";
import "./App.css";

const App = () => {
  const tabsData = [
    { label: "Tab 1", content: "Content for Tab 1" },
    { label: "Tab 2", content: "Content for Tab 2" },
    { label: "Tab 3", content: "Content for Tab 3" },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Tabs </h1>
      <Tabs items={tabsData} />
    </div>
  );
};

const Tabs = ({ items }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index, callback) => {
    setActiveTab(index);
    if (callback) {
      callback();
    }
  };

  return (
    <div className="tabs-container">
      <div className="tab-headers">
        {items.map((item, index) => (
          <div
            key={index}
            className={`tab-header ${index === activeTab ? "active" : ""}`}
            onClick={() => handleTabClick(index, item.callback)}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="tab-content">{items[activeTab].content}</div>
    </div>
  );
};

export default App;
