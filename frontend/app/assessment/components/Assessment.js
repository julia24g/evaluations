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

  const categories = state.categories || [];

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
      dispatch({ type: "CLEAR_ASSESSMENT" });
      dispatch({ type: "CLEAR_ANSWERS" });
      router.push("/dashboard");
    } catch (error) {
      console.error("Error updating assessment answers:", error);
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  const resultsCategory = { key: categories.length, name: "Results" };
  const allCategories = [...categories, resultsCategory];

  const [activeTab, setActiveTab] = useState(categories.length > 0 ? categories[0].name : "Results");

  return (
    <div className="flex h-screen">
      {/* ✅ Sidebar menu */}
      <div className="w-60 bg-base-200 p-4">
        <h2 className="menu-title">Assessment Title</h2>
        <ul className="menu rounded-box">
          {allCategories.map((category) => (
            <li key={category.key}>
              <a
                className={`block p-2 rounded ${
                  activeTab === category.name ? "bg-primary text-white" : "hover:bg-base-300"
                }`}
                onClick={() => setActiveTab(category.name)}
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ✅ Right-side content */}
      <div className="flex-1 p-6 overflow-auto">
        {activeTab === "Results" ? <Results /> : <Category categoryName={activeTab} />}
      </div>
    </div>
  );
};

export default Assessment;
