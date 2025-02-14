"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '../../context/UserContext';
import { useRouter } from "next/navigation";
import SingleAssessment from './SingleAssessment';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Home = () => {
  const { state, dispatch } = useUser();
  const router = useRouter();
  const [assessments, setAssessments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // add logic for what is visible and not visible

  useEffect(() => {
    dispatch({ type: "SET_USER", payload: 1 });
    dispatch({ type: "SET_ROLE", payload: "Software Engineer" });
  }, [dispatch]);
  

  useEffect(() => {
    if (state.userInfo.userId) {
      setLoading(true);
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/api/assessments`, { params: { userId: state.userInfo.userId } })
        .then((response) => {
          setAssessments(response.data);
        })
        .catch((error) => {
          console.error("Error fetching assessments:", error);
          setError(error.response?.data?.message || "An error occurred");
        })
        .finally(() => {
          setLoading(false);
        });
      setLoading(false);
    }
  }, [state.userInfo.userId, assessments]);

  useEffect(() => {
    if (state.userInfo.role) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/api/questions`, { params: { role: state.userInfo.role } })
        .then((response) => {
          const questions = response.data;
          
          // Store questions as an array
          dispatch({ type: "SET_QUESTIONS_ARRAY", payload: questions });

          // Get unique categories from questions
          const categories = Array.from(
            new Set(
              questions
                .map((question) => question.category)
            )
          ).map((category, index) => ({ key: index, name: category }));

          dispatch({ type: "SET_CATEGORIES", payload: categories || [] })

          // Turn questions into a dictionary
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
  }, [state.userInfo.role]);

  useEffect(() => {
    if (state.questionsArray.length > 0) {
      const tempResultStore = {};
  
      state.questionsArray.forEach((question) => {
        const { category, level } = question;
  
        // Ensure category exists
        if (!tempResultStore[category]) {
          tempResultStore[category] = {};
        }
  
        // Ensure level exists
        if (!tempResultStore[category][level]) {
          tempResultStore[category][level] = { count: 0, total: 0 };
        }

        // Ensure the "category level" exists
        if (!tempResultStore[category]["category"]) {
          tempResultStore[category]["category"] = { count: 0, total: 0 };
        }
  
        tempResultStore[category][level].count += 1;
        tempResultStore[category]["category"].count += 1;
      });
  
      dispatch({ type: "SET_RESULTSTORE", payload: tempResultStore });
    }
  }, [state.questionsArray]);
  

  const createAndOpenAssessment = () => {
    if (state.userInfo.userId) {
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/api/assessments`, { userId: state.userInfo.userId })
        .then((response) => {
          const newAssessmentId = response.data.assessmentid;
          dispatch({ type: "SET_ASSESSMENT", payload: newAssessmentId});

          setTimeout(() => {
            router.push(`/assessment`);
          }, 0);

          router.push(`/assessment`);
        })
        .catch((error) => {
          console.error("Error creating assessment:", error);
          setError(error.response?.data?.message || "An error occurred");
        });
    }
  };

  const handleDeleteAssessment = (assessmentId) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/api/assessments/${assessmentId}`)
      .then(() => {
        setAssessments(prev => prev.filter(a => a.assessmentId !== assessmentId));
      })
      .catch(error => {
        console.error("Error deleting assessment:", error);
        setError(error.response?.data?.message || "An error occurred");
      });
  };
  
  return (
    <div className="p-0 max-w-3xl mx-auto bg-white rounded-lg">
      <div>
      <h1>Employee Assessments</h1>
      <p>Some text about what this is...</p>
      <Menu as="div" className="relative inline-block text-left">
      <div>
        {/* ✅ Main Button */}
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
          Create Assessment
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        </MenuButton>
      </div>

      {/* ✅ Dropdown Menu */}
      <MenuItems
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-none 
                   transition-transform scale-95 opacity-0 data-[headlessui-state=open]:scale-100 data-[headlessui-state=open]:opacity-100"
      >
        <div className="py-1">
          {/* ✅ Dropdown Items */}
          <MenuItem>
            {({ active }) => (
              <button
                onClick={() => onSelect("Intermediate")}
                className={`block w-full px-4 py-2 text-sm text-gray-700 text-left ${active ? "bg-gray-100 text-gray-900" : ""}`}
              >
                Intermediate Assessment
              </button>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <button
                onClick={() => onSelect("Senior")}
                className={`block w-full px-4 py-2 text-sm text-gray-700 text-left ${active ? "bg-gray-100 text-gray-900" : ""}`}
              >
                Senior Assessment
              </button>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <button
                onClick={() => onSelect("Principal")}
                className={`block w-full px-4 py-2 text-sm text-gray-700 text-left ${active ? "bg-gray-100 text-gray-900" : ""}`}
              >
                Principal Assessment
              </button>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
      <button className="btn" onClick={createAndOpenAssessment}>Create New Assessment</button>
      <ul role="list" className="divide-y divide-gray-100">
        {assessments.map(({ assessmentid, status, level, firstname, lastname, date }) => (
          <SingleAssessment
            key={assessmentid}
            assessmentId={assessmentid}
            status={status}
            level={level}
            firstname={firstname}
            lastname={lastname}
            date={date}
            onDelete={handleDeleteAssessment}
          />
        ))}
      </ul>
    </div>
    </div>

  );
};

export default Home;
