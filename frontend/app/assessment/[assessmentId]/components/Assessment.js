"use client";

import React, { useState, useEffect } from "react";
import Category from "./Category";
import Results from "./Results";
import { useUser } from "../../context/UserContext";
import axios from "axios";
import { useRouter } from "next/navigation";

const Assessment = () => {
  const { state, dispatch } = useUser();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  const categories = state.categories;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/assessments/form/${state.assessmentId}`
        );
        const answers = res.data.assessmentAnswers;

        if (answers) {
          dispatch({ type: "SET_ANSWERS", payload: answers });
        }
      } catch (err) {
        console.error("Error fetching assessment data:", err);
        setError(err.response?.data?.message || "An error occurred");
      }
    };

    setLoading(true);
    fetchData();
    setLoading(false);
  }, [state.assessmentId, dispatch]);

  const handleBackButtonClick = async () => {
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/assessments/${state.assessmentId}`, {
        assessmentAnswers: state.answers,
      });

      router.push("/dashboard");
    } catch (error) {
      console.error("Error updating assessment answers:", error);
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  const resultsCategory = { key: categories.length, name: "Results" };
  const allCategories = [...categories, resultsCategory];

  const [activeTab, setActiveTab] = useState(categories[0].name);

  return (
    <div className="evaluation d-flex" style={{ height: "100vh" }}>
      <nav className="navbar bg-body-tertiary flex-shrink-0 p-3" style={{ width: "280px" }}>
        <div className="container-fluid flex-column">
          <button type="button" className="btn" onClick={handleBackButtonClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </button>

          <span className="navbar-brand mb-0 h1">Navbar</span>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            {allCategories.map((category) => (
              <li className="nav-item" key={category.key}>
                <button
                  className={`nav-link ${activeTab === category.name ? "active" : ""}`}
                  onClick={() => setActiveTab(category.name)}
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

export default Assessment;
