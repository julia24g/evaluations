"use client"
import React from 'react';
import { useUser } from '../../context/UserContext';

const DropDownAnswer = ({ questionKey }) => {

  const { state, dispatch } = useUser();

  const scoreMapping = {
    "Not Observed": 0,
    "Not Applicable": 0,
    "Never": 0,
    "Occasionally": 1,
    "Frequently": 2,
    "Always": 3,
  };
  
  const reverseScoreMapping = {
    0: "Not Observed",
    1: "Occasionally",
    2: "Frequently",
    3: "Always",
  };

  const currentAnswer = reverseScoreMapping[state.answers[questionKey]] || "Not Observed";

  const handleAnswerChange = (event) => {
    const selectedAnswer = event.target.value;
    const selectedScore = scoreMapping[selectedAnswer];
    dispatch({
      type: "UPDATE_ANSWERS",
      payload: { [questionKey]: selectedScore },
    });
  };

  return (
    <div className="dropdown-answer">
      <select
        id={questionKey}
        value={currentAnswer}
        onChange={handleAnswerChange}
        className="form-select"
      >
        <option value="Not Observed">Not Observed</option>
        <option value="Not Applicable">Not Applicable</option>
        <option value="Never">Never</option>
        <option value="Occasionally">Occasionally</option>
        <option value="Frequently">Frequently</option>
        <option value="Always">Always</option>
      </select>
    </div>
  );
};

export default DropDownAnswer;