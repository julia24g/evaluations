"use client";
import React from 'react';
import { useRouter } from "next/navigation";
import { useUser } from '../../context/UserContext';

const SingleEmployee = ({ userid, firstname, lastname, managerfirstname, managerlastname }) => {
  
  const router = useRouter();
  const { dispatch } = useUser();

  const openEmployee = () => {
    dispatch({ type: "SET_ASSESSMENT_INFO", payload: {"id": assessmentId, "status": status}});
    router.push(`/assessment`);
  }

  return (
    <li key={userid} className="flex items-center justify-between gap-x-6 p-4 rounded-lg">
      {/* Left Section: Name & Status */}
      <div className="flex min-w-0 items-center gap-x-4">
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold text-gray-900 flex items-center gap-x-2">
            {firstname} {lastname}
          </p>
          <p className="mt-1 truncate text-xs text-gray-500">Manager: {managerfirstname} {managerlastname}</p>
        </div>
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center gap-x-3">
        <button className="btn btn-sm">
          View Evaluations
        </button>
      </div>
    </li>

  );
};

export default SingleEmployee;
