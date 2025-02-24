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
  CalendarIcon,
  CheckIcon,
  UserIcon
} from '@heroicons/react/20/solid';
import Feedback from "./Feedback";

const Assessment = () => {
  const { state, dispatch } = useUser();
  const router = useRouter();
  const contentRef = useRef(null);
  const activeSubmitButton = state.assessmentInfo?.status !== "Complete";
  const [presentationEnabled, setPresentationEnabled] = useState(false);

  if (!state.assessmentInfo){
    return <LoadingOverlay />
  }

  const categories = state.categories || [];

  useEffect(() => {
    if (state.assessmentInfo.role) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/api/questions`, { params: { role: state.assessmentInfo.role } })
        .then((response) => {
          const questions = response.data;
          
          dispatch({ type: "SET_QUESTIONS_ARRAY", payload: questions });

          const categories = Array.from(
            new Set(
              questions
                .map((question) => question.category)
            )
          ).map((category, index) => ({ key: index, name: category }));

          dispatch({ type: "SET_CATEGORIES", payload: categories || [] })

          const questionsMapping = questions.reduce((acc, question) => {
            acc[question.questionid] = question;
            return acc;
          }, {});
          dispatch({ type: "SET_QUESTIONS_MAPPING", payload: questionsMapping });

        })
        .catch((error) => {
          console.error("Error fetching evaluations:", error);
          setError(error.response?.data?.message || "An error occurred");
        })
    }
  }, [state.assessmentInfo.role]);

  useEffect(() => {
    if (state.questionsArray.length > 0) {
      const tempResultStore = {};
  
      state.questionsArray.forEach((question) => {
        const { category, level } = question;
          if (!tempResultStore[category]) {
          tempResultStore[category] = {};
        }
          if (!tempResultStore[category][level]) {
          tempResultStore[category][level] = { count: 0, total: 0 };
        }
        if (!tempResultStore[category]["category"]) {
          tempResultStore[category]["category"] = { count: 0, total: 0 };
        }
  
        tempResultStore[category][level].count += 1;
        tempResultStore[category]["category"].count += 1;
      });
  
      dispatch({ type: "SET_RESULTSTORE", payload: tempResultStore });
    }
  }, [state.questionsArray]);

  console.log(state.questionsArray)
  console.log(state.questionsMapping)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/assessments/form/${state.assessmentInfo.id}`
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

    fetchData();
    
  }, [state.assessmentInfo?.id, dispatch]);

  const handleSave = async () => {
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/assessments/${state.assessmentInfo?.id}`, {
        assessmentAnswers: state.answers,
      });
    } catch (error) {
      console.error("Error updating assessment answers:", error);
      setError(error.response?.data?.message || "An error occurred");
    }
  }

  const handleSubmit = async () => {
    try {
      if (state.assessmentInfo?.status === "In Progress") {
        await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/assessments/review/${state.assessmentInfo.id}`)
      }
      else {
        await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/assessments/complete/${state.assessmentInfo.id}`)
      }
      router.push(`/dashboard?userId=${state.userInfo.userId}`);
      
    }
    catch (error) {
      console.error("Error updating assessment answers:", error);
      setError(error.response?.data?.message || "An error occurred");
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPresentationEnabled(JSON.parse(localStorage.getItem("presentationEnabled") || "false"));
    }
  }, []);
  
  const onToggle = () => {
    const newValue = !presentationEnabled;
    setPresentationEnabled(newValue);
    localStorage.setItem("presentationEnabled", JSON.stringify(newValue));
  };
  

  const resultsKey = categories.length;
  const peerFeedbackKey = categories.length + 1;

  const [activeTab, setActiveTab] = useState(categories[0]?.name);

  return (
    <>
      {/* ✅ Header Section */}
      <div className="lg:flex lg:items-center lg:justify-between p-6">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {state.assessmentInfo?.level || ""} Performance Assessment
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <UserIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
              {state.assessmentInfo?.firstname} {state.assessmentInfo?.lastname}
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CalendarIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
              {state.assessmentInfo?.date || "N/A"}
            </div>
          </div>
        </div>
        {state.assessmentInfo?.status === 'In Review' && 
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
              {state.assessmentInfo?.status === "In Progress" ? "Submit For Review" : "Complete"}
            </button>
            </span>
          </div>
        }
      </div>

      {/* ✅ Main Assessment Content */}
      <div className="flex h-screen">
        {/* Sidebar menu */}
        <div className="w-60 bg-base-200 p-4 overflow-y-auto">
          <ul className="menu rounded-box">
            <li>
              <details open>
                <summary>Questions</summary>
                <ul>
                  {categories.map((category) => (
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
              </details>
            </li>
            <li key={resultsKey}>
              <a
                className={`block p-2 rounded ${
                  activeTab === "Results" ? "bg-primary text-white" : "hover:bg-base-300"
                }`}
                onClick={() => setActiveTab("Results")}
              >
                Results
              </a>
            </li>
            {state.assessmentInfo?.status !== "In Progress" && 
              <li key={peerFeedbackKey}>
                <a
                  className={`block p-2 rounded ${
                    activeTab === "Peer Feedback" ? "bg-primary text-white" : "hover:bg-base-300"
                  }`}
                  onClick={() => setActiveTab("Peer Feedback")}
                >
                  Peer Feedback
                </a>
              </li>
            }
          </ul>
        </div>

        {/* Right-side content */}
        <div className="flex-1 p-6 overflow-auto" ref={contentRef}>
        {activeTab === "Results" ? (
            <Results />
        ) : activeTab === "Peer Feedback" ? (
            <Feedback />
        ) : (
            <Category categoryName={activeTab} />
        )}
          <ScrollIndicator targetRef={contentRef} />
        </div>
      </div>
    </>
  );
};

export default Assessment;
