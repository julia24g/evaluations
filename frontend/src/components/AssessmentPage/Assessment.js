import React, { useState, useEffect } from 'react';
import Category from './Category';
import Results from './Results';
import { useUser } from '../../context/UserContext';
import axios from 'axios';

const Evaluation = ({}) => {
  const { state, dispatch } = useUser();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = state.categories

  useEffect(() => {
    if (state.userId && state.assessmentId) {
      setLoading(true);
      axios
        .get(`/api/assessments/${assessmentId}`)
        .then((response) => {
          dispatch({ type: "SET_ANSWERS", payload: response.data.assessmentAnswers || {} })
        })
        .catch((error) => {
          console.error("Error fetching assessment data:", error);
          setError(error.response?.data?.message || "An error occurred");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [state.assessmentId, dispatch]);

  const resultsCategory = { key: categories.length, name: "Results" };
  const allCategories = [...categories, resultsCategory];

  const [activeTab, setActiveTab] = useState(categories[0].name);

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
            {allCategories
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
      <div className="flex-grow-1 p-3">
        {activeTab === "Results" && <Results />}
        {activeTab !== "Results" && <Category categoryName={activeTab} />}
      </div>
    </div>
  );
};

export default Evaluation;
