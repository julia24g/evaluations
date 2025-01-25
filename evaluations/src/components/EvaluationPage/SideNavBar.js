import React, { useState } from 'react';
import questionData from '../../staticdata/questionData';

const SideNavBar = ({role}) => {
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
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        {categories
        .map((category) => (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                className={`nav-link ${activeTab === category.name ? 'active' : ''}`}
                onClick={() => handleTabClick(category.name)}
                >
                {category.name}
                </button>
              </li>
            </ul>
        </div>
        ))}
      </div>
    </nav>

  );
}

export default SideNavBar;