import React, { useState } from 'react';
import Category from './Category';
import questionData from '../../staticdata/questionData';

const Evaluation = ({role}) => {

  const categories = Array.from(
    new Set(
      questionData
        .filter((question) => question.role === role)
        .map((question) => question.category)
    )
  ).map((category, index) => ({ key: index, name: category }));

  const [activeTab, setActiveTab] = useState(categories[0].name); // Default to the first category
  console.log(categories);
  

  // Handler to update the active tab when clicked
  const handleTabClick = (categoryName) => {
    setActiveTab(categoryName);
  };

  return (
    <div className="evaluation">
      <p>Title</p>
      {/* Tabs */}
      <ul className="nav flex-column nav-tabs">
        {categories
        .map((category) => (
          <li className="nav-item" key={category.key}>
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
        <Category categoryName={activeTab} role={role}/>
      </div>
    </div>
  );
};

export default Evaluation;
