"use client";

import React, { useState, useEffect, useRef } from "react";
import Category from "./Category";
import Results from "./Results";
import { useUser } from "../../context/UserContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import LoadingOverlay from "./LoadingOverlay";
import ScrollIndicator from "./ScrollIndicator";

import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  CurrencyDollarIcon,
  MapPinIcon,
} from '@heroicons/react/20/solid';

const Assessment = () => {
  const { state, dispatch } = useUser();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const contentRef = useRef(null);
  const activeSubmitButton = state.assessmentInfo.status !== "Complete";
  const [presentationEnabled, setPresentationEnabled] = useState(false);

  const categories = state.categories || [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/assessments/form/${state.assessmentInfo.id}`
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
    
  }, [state.assessmentInfo.id, dispatch]);

  const handleSave = async () => {
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/assessments/${state.assessmentInfo.id}`, {
        assessmentAnswers: state.answers,
      });
    } catch (error) {
      console.error("Error updating assessment answers:", error);
      setError(error.response?.data?.message || "An error occurred");
    }
  }

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (state.assessmentInfo.status === "In Progress") {
        await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/assessments/review/${state.assessmentInfo.id}`)
      }
      else {
        await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/assessments/complete/${state.assessmentInfo.id}`)
      }
      router.push("/dashboard");
    }
    catch (error) {
      console.error("Error updating assessment answers:", error);
      setError(error.response?.data?.message || "An error occurred");
      setLoading(false);
    }
    setLoading(false);
  }

  const onToggle = () => {
    const currentValue = JSON.parse(localStorage.getItem("presentationEnabled") || "false");
    const newValue = !currentValue;
    setPresentationEnabled(newValue);
    localStorage.setItem("presentationEnabled", JSON.stringify(newValue));
  };
  

  const resultsCategory = { key: categories.length, name: "Results" };
  const allCategories = [...categories, resultsCategory];

  const [activeTab, setActiveTab] = useState(categories.length > 0 ? categories[0].name : "Results");

  return (
    <>
      {/* ✅ Header Section */}
      <div className="lg:flex lg:items-center lg:justify-between p-6">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {state.assessmentInfo?.title || "Performance Assessment"}
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <BriefcaseIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
              {state.assessmentInfo?.role || "N/A"}
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <MapPinIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
              Remote
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CurrencyDollarIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
              {state.assessmentInfo?.salaryRange || "$120k - $140k"}
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CalendarIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
              Closing on {state.assessmentInfo?.closingDate || "N/A"}
            </div>
          </div>
        </div>
        {state.assessmentInfo.status === 'In Review' && 
              <div className="flex items-center gap-3">
                {/* Label */}
                <span className="text-sm font-medium text-gray-700">Presentation Mode</span>

                {/* Toggle Button */}
                <button
                  onClick={onToggle}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                    presentationEnabled ? "bg-indigo-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      presentationEnabled ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            }
        {activeSubmitButton &&
          <div className="mt-5 flex lg:mt-0 lg:ml-4">
            <span className="hidden sm:block">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                onClick={handleSave}
              >
                Save
              </button>
            </span>
            <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleSubmit}
            >
              <CheckIcon aria-hidden="true" className="mr-1.5 -ml-0.5 size-5" />
              {state.assessmentInfo.status === "In Progress" ? "Submit For Review" : "Complete"}
            </button>
            </span>
          </div>
        }
      </div>

      {/* ✅ Main Assessment Content */}
      <div className="flex h-screen">
        {loading && <LoadingOverlay />}
        {/* Sidebar menu */}
        <div className="w-60 bg-base-200 p-4 overflow-y-auto">
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

        {/* Right-side content */}
        <div className="flex-1 p-6 overflow-auto" ref={contentRef}>
          {activeTab === "Results" ? <Results /> : <Category categoryName={activeTab} />}
          <ScrollIndicator targetRef={contentRef} />
        </div>
      </div>
    </>
  );
};

export default Assessment;
