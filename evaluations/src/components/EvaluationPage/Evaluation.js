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

  const [activeTab, setActiveTab] = useState(categories[0].name);

  // Handler to update the active tab when clicked
  const handleTabClick = (categoryName) => {
    setActiveTab(categoryName);
  };

  return (
    <div className="evaluation d-flex" style={{ height: '100vh' }}>
        <nav className="navbar bg-body-tertiary flex-shrink-0 p-3" style={{ width: '280px' }}>
          <div className="container-fluid flex-column">
            <span className="navbar-brand mb-0 h1">Navbar</span>
            <hr></hr>
            <ul className="nav nav-pills flex-column mb-auto">
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
          </div>
        </nav>
      {/* Content */}
      <div className="flex-grow-1 p-3">
        <Category categoryName={activeTab} role={role} />
      </div>
    </div>
  );
};

export default Evaluation;
