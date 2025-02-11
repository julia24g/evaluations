import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '../../context/UserContext';
import { useRouter } from "next/navigation";
import SingleAssessment from './SingleAssessment';

const Home = () => {
  const { state, dispatch } = useUser();
  const router = useRouter();
  const [assessments, setAssessments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let tempResultStore = {}

  useEffect(() => {
    dispatch({ type: "SET_USER", payload: 1 });
    dispatch({ type: "SET_ROLE", payload: "Software Engineer" });
  }, [dispatch]);
  

  useEffect(() => {
    if (state.userId) {
      setLoading(true);
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/api/assessments`, { params: { userId: state.userId } })
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
  }, [state.userId, assessments]);

  useEffect(() => {
    if (state.role) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/api/questions`, { params: { role: state.role } })
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
  }, [state.role]);

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
    if (state.userId) {
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/api/assessments`, { userId: state.userId })
        .then((response) => {
          const newAssessmentId = response.data.assessmentid;
          dispatch({ type: "SET_ASSESSMENT", payload: newAssessmentId});

          setTimeout(() => {
            router.push(`/assessment/${newAssessmentId}`);
          }, 0);

          router.push(`/assessment/${newAssessmentId}`);
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
    <div className="employee-home-page prose">
      <h1>Employee Assessments</h1>
      <p>Some text about what this is...</p>
      <button className="btn" onClick={createAndOpenAssessment}>Create New Assessment</button>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <div className="evaluations-list">
          {assessments.map(({ assessmentid, status, date }) => (
            <SingleAssessment
              key={assessmentid}
              assessmentId={assessmentid}
              status={status}
              date={date}
              onDelete={handleDeleteAssessment}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
