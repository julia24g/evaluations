import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAnswer } from '../../slices/answersSlice';

const DropDownAnswer = ({ role, category, level, questionKey }) => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.answers.answers);

  const currentAnswer =
    answers?.[role]?.[category]?.[level]?.[questionKey]?.answer || "Not Observed";


  const handleAnswerChange = (event) => {
    const newAnswer = event.target.value;
    dispatch(changeAnswer({ role: role, category: category, level: level, questionKey: questionKey, answer: newAnswer }));
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
