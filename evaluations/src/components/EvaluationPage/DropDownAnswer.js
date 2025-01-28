import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAnswer } from '../../slices/answersSlice';

const DropDownAnswer = ({ questionKey }) => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.answers.answers);

  const handleAnswerChange = (questionKey, event) => {
    const newAnswer = event.target.value;
    dispatch(changeAnswer({ questionKey: questionKey, answer: newAnswer }));
  };

  return (
    <div className="dropdown-answer">
      <select
        id={`dropdown-`}
        value={answers[questionKey] || "notObserved"}
        onChange={(e) => handleAnswerChange(questionKey, e)}
        className="form-select"
      >
        <option value="notObserved">Not Observed</option>
        <option value="notApplicable">Not Applicable</option>
        <option value="never">Never</option>
        <option value="occasionally">Occasionally</option>
        <option value="frequently">Frequently</option>
        <option value="always">Always</option>
      </select>
    </div>
  );
};

export default DropDownAnswer;
