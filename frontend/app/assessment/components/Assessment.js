"use client";

import React, { useState, useEffect, useRef } from "react";
import Category from "./Category";
import Results from "./Results";
import { useUser } from "../../context/UserContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import LoadingOverlay from "./LoadingOverlay";
import ScrollIndicator from "./ScrollIndicator";
import NavBar from "../../utils/NavBar";

import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  CurrencyDollarIcon,
  MapPinIcon,
} from '@heroicons/react/20/solid';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

const Assessment = () => {
  const { state, dispatch } = useUser();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const contentRef = useRef(null);
  const activeSubmitButton = state.assessmentInfo.status !== "Complete"

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

  const handleBack = async () => {
      setLoading(true);
      await handleSave();
      dispatch({ type: "CLEAR_ASSESSMENT_INFO" });
      dispatch({ type: "CLEAR_ANSWERS" });
      router.push("/dashboard");
      setLoading(false);
  }

  const handleSave = async () => {
    setLoading(true);
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/assessments/${state.assessmentInfo.id}`, {
        assessmentAnswers: state.answers,
      });
    } catch (error) {
      console.error("Error updating assessment answers:", error);
      setError(error.response?.data?.message || "An error occurred");
      setLoading(false);
    }
    setLoading(false);
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

  const resultsCategory = { key: categories.length, name: "Results" };
  const allCategories = [...categories, resultsCategory];

  const [activeTab, setActiveTab] = useState(categories.length > 0 ? categories[0].name : "Results");

  return (
    <>
    <NavBar individualContributor={state.userInfo.individualContributor}/>
      {/* ✅ Header Section */}
      <div className="lg:flex lg:items-center lg:justify-between p-6">
        <div className="min-w-0 flex-1">
          <button 
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"
          onClick={handleBack}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
            </svg>
          </button>
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
        {activeSubmitButton &&
          <div className="mt-5 flex lg:mt-0 lg:ml-4">
            <span className="hidden sm:block">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                onClick={handleSave}
              >
                Save Progress
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
