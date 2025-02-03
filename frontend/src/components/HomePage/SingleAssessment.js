import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const SingleEvaluation = ({ assessmentId, status, date }) => {
  
  const navigate = useNavigate();
  const { dispatch } = useUser();

  const openAssessment = () => {
    dispatch({ type: "SET_ASSESSMENT", payload: assessmentId});
    navigate(`/assessment/${assessmentId}`);
  }

  return (
    <div className="single-evaluation">
      <button onClick={openAssessment} className="evaluation-button">
        <div>Status: {status}</div>
        <div>Date: {new Date(date).toLocaleDateString()}</div>
      </button>
    </div>
  );
};

export default SingleEvaluation;
