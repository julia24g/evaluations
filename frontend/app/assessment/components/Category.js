"use client";
import React, { useState } from "react";
import Questions from "./Questions";

const Category = ({ categoryName }) => {
  const tabNames = ["Questions", "Comments"];
  const [activeTab, setActiveTab] = useState(tabNames[0]);

  return (
    <div className="flex-grow-1 p-3">
      <h2 className="text-xl font-semibold mb-4">{categoryName}</h2>

      <div role="tablist" className="tabs tabs-lifted">
        {tabNames.map((tab) => (
          <a
            key={tab}
            role="tab"
            className={`tab ${activeTab === tab ? "tab-active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </a>
        ))}
      </div>

      <div className="mt-4">
        {activeTab === "Questions" && <Questions categoryName={categoryName} />}
        {activeTab === "Comments" && <p>Comments section coming soon!</p>}
      </div>
    </div>
  );
};

export default Category;
