import React, { useState } from 'react';
import Category from '../Category';

const Evaluation = () => {
  // State to keep track of the selected tab
  const categories = [
    { name: 'Technology' },
    { name: 'Design' },
    { name: 'Marketing' }
  ];
  const [activeTab, setActiveTab] = useState(categories[0].name); // Default to the first category
  

  // Handler to update the active tab when clicked
  const handleTabClick = (categoryName) => {
    setActiveTab(categoryName);
  };

  const level = "Intermediate"
  const roles = ["Test Engineer", "Software Engineer"]

  return (
    <div className="evaluation">
      {/* Tabs */}
      <ul className="nav nav-tabs">
        {categories.map((category) => (
          <li className="nav-item" key={category.name}>
            <button
            className={`nav-link ${activeTab === category.name ? 'active' : ''}`}
            onClick={() => handleTabClick(category.name)}
            >
            {category.name}
            </button>

          </li>
        ))}
      </ul>

      {/* Content */}
      <div className="category-content">
        <Category categoryName={activeTab} roles={roles} level={level} />
      </div>
    </div>
  );
};

export default Evaluation;
