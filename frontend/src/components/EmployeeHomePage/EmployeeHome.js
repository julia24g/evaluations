import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import SingleEvaluation from './SingleEvaluation';

const EmployeeHome = () => {
  const { state, dispatch } = useUser();
  const navigate = useNavigate();
  const [assessments, setAssessments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (state.userId) {
      setLoading(true);
      axios
        .get(`/api/assessments`, { params: { userId: state.userId } })
        .then((response) => {
          setAssessments(response.data);
        })
        .catch((error) => {
          console.error("Error fetching evaluations:", error);
          setError(error.response?.data?.message || "An error occurred");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [state.userId]);

  const createAndOpenAssessment = () => {
    if (state.userId) {
      axios
        .post(`/api/assessments`, { userId: state.userId })
        .then((response) => {
          const newAssessmentId = response.data.assessmentId;
          dispatch({ type: "SET_ASSESSMENT", payload: newAssessmentId});
          navigate(`/assessment/${newAssessmentId}`);
        })
        .catch((error) => {
          console.error("Error creating assessment:", error);
          setError(error.response?.data?.message || "An error occurred");
        });
    }
  };

  return (
    <div className="employee-home-page">
      <h1>Employee Assessments</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <div className="evaluations-list">
          {assessments.map(({ assessmentId, status, date }) => (
            <SingleEvaluation
              key={assessmentId}
              assessmentId={assessmentId}
              status={status}
              date={date}
            />
          ))}
        </div>
      )}
      <button onClick={createAndOpenAssessment}>Create New Assessment</button>
    </div>
  );
};

export default EmployeeHome;
