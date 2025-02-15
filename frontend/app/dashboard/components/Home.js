"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '../../context/UserContext';
import { useRouter } from "next/navigation";
import SingleAssessment from './SingleAssessment';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Home = () => {
  const { state, dispatch } = useUser();
  const router = useRouter();
  const [assessments, setAssessments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inProgressAssmts, setInProgressAssmts] = useState([]);
  const [inReviewAssmts, setInReviewAssmts] = useState([]);
  const [completeAssmts, setCompleteAssmts] = useState([]);

  const isCreateButtonActive = state.userInfo?.individualContributor === true;

  useEffect(() => {
    dispatch({ type: "SET_USER_INFO", payload: {"userId": 1, "role": "Software Engineer", "individualContributor": true} });
  }, [dispatch]);

  useEffect(() => {
    if (state.userInfo?.userId) {
      setLoading(true);
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/api/assessments`, { params: { userId: state.userInfo.userId } })
        .then((response) => setAssessments(response.data))
        .catch((error) => setError(error.response?.data?.message || "An error occurred"))
        .finally(() => setLoading(false));
    }
  }, [state.userInfo?.userId]);

  useEffect(() => {
    if (assessments.length > 0) {
      setInProgressAssmts(assessments.filter((assessment) => assessment.status === 'In Progress'));
      setInReviewAssmts(assessments.filter((assessment) => assessment.status === 'In Review'));
      setCompleteAssmts(assessments.filter((assessment) => assessment.status === 'Complete'));
    }
  }, [assessments]);

  const createAndOpenAssessment = (level) => {
    if (state.userInfo?.userId) {
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/api/assessments`, { userId: state.userInfo.userId, level: level })
        .then((response) => {
          dispatch({ type: "SET_ASSESSMENT", payload: response.data.assessmentid });
          router.push(`/assessment`);
        })
        .catch((error) => setError(error.response?.data?.message || "An error occurred"));
    }
  };

  const handleDeleteAssessment = (assessmentId) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/api/assessments/${assessmentId}`)
      .then(() => {
        setAssessments((prev) => prev.filter((a) => a.assessmentId !== assessmentId));
        setInProgressAssmts((prev) => prev.filter((a) => a.assessmentId !== assessmentId));
        setInReviewAssmts((prev) => prev.filter((a) => a.assessmentId !== assessmentId));
        setCompleteAssmts((prev) => prev.filter((a) => a.assessmentId !== assessmentId));
        console.log("here");
      })
      .catch((error) => setError(error.response?.data?.message || "An error occurred"));
  };

  const renderAssessmentsList = (title, assessmentsList) => {
    if (assessmentsList.length === 0) return null;
    return (
      <>
        <h2 className="text-lg font-semibold mt-6">{title}</h2>
        <ul role="list" className="divide-y divide-gray-100">
          {assessmentsList.map(({ assessmentid, status, level, firstname, lastname, date }) => (
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
      </>
    );
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="font-semibold text-gray-900 sm:text-5xl">Performance Evaluations</h1>
      <p className="mt-2 text-gray-600">This is an app for PCC performance evaluations.</p>

      {isCreateButtonActive && (
        <Menu as="div" className="relative inline-block text-left mt-4">
          <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
              Create Assessment
              <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
            </MenuButton>
          </div>

          <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-none transition-transform scale-95 opacity-0 data-[headlessui-state=open]:scale-100 data-[headlessui-state=open]:opacity-100">
            <div className="py-1">
              {["Intermediate", "Senior", "Principal"].map((level) => (
                <MenuItem key={level}>
                  {({ active }) => (
                    <button
                      onClick={() => createAndOpenAssessment(level)}
                      className={`block w-full px-4 py-2 text-sm text-gray-700 text-left ${
                        active ? "bg-gray-100 text-gray-900" : ""
                      }`}
                    >
                      {level}
                    </button>
                  )}
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </Menu>
      )}

      {renderAssessmentsList("In Review", inReviewAssmts)}
      {renderAssessmentsList("In Progress", inProgressAssmts)}
      {renderAssessmentsList("Complete", completeAssmts)}
    </div>
  );
};

export default Home;
