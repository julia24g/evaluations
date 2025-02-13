"use client";

import React, { useState, useEffect, useRef } from "react";
import Category from "./Category";
import Results from "./Results";
import { useUser } from "../../context/UserContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import LoadingOverlay from "./LoadingOverlay";
import ScrollIndicator from "./ScrollIndicator";

const Assessment = () => {
  const { state, dispatch } = useUser();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const contentRef = useRef(null);

  const categories = state.categories || [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/assessments/form/${state.assessmentId}`
        );
        const answers = res.data.assessmentAnswers;

        if (answers) {
          dispatch({ type: "SET_ANSWERS", payload: answers });
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching assessment data:", err);
        setError(err.response?.data?.message || "An error occurred");
      }
    };

    fetchData();
    
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
    <>
      {/* <div className="navbar bg-base-100">
        <div className="flex-none">
        <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy-fill" viewBox="0 0 16 16">
              <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0H3v5.5A1.5 1.5 0 0 0 4.5 7h7A1.5 1.5 0 0 0 13 5.5V0h.086a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5H14v-5.5A1.5 1.5 0 0 0 12.5 9h-9A1.5 1.5 0 0 0 2 10.5V16h-.5A1.5 1.5 0 0 1 0 14.5z"/>
              <path d="M3 16h10v-5.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5zm9-16H4v5.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5zM9 1h2v4H9z"/>
            </svg>
          </button>
        </div>
      </div> */}
      <div className="flex h-screen">
        {loading && <LoadingOverlay />}
        {/* ✅ Sidebar menu */}
        <div className="w-60 bg-base-200 p-4 overflow-y-auto">
          <ul className="menu rounded-box">
            <li className="menu-title">Assessment Title</li>
            
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
        <div className="flex-1 p-6 overflow-auto" ref={contentRef}>
          {activeTab === "Results" ? <Results /> : <Category categoryName={activeTab} />}
          <ScrollIndicator targetRef={contentRef} />
        </div>
      </div>
    </>
  );
};

export default Assessment;
