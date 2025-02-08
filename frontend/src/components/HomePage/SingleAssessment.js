import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const SingleAssessment = ({ assessmentId, status, date, onDelete }) => {
  
  const navigate = useNavigate();
  const { dispatch } = useUser();

  const openAssessment = () => {
    dispatch({ type: "SET_ASSESSMENT", payload: assessmentId});
    navigate(`/assessment/${assessmentId}`);
  }

  return (
    <div className="card single-assessment">
      <div className="card-body">
        <div>Status: {status}</div>
        <div>Date: {new Date(date).toLocaleDateString()}</div>
        <button onClick={openAssessment} className="assessment-button">Open</button>
        <button onClick={() => onDelete(assessmentId)} className="assessment-button">Delete</button>
      </div>
    </div>
  );
};

export default SingleAssessment;
