import React, { useState } from 'react';

const DropDownAnswer = ({ key }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <div className="dropdown-answer">
      <select
        id={`dropdown-`}
        value={selectedAnswer}
        onChange={handleChange}
        className="form-select"
      >
        <option value="">Not Observed</option>
        <option value="Option 1">Not Applicable</option>
        <option value="Option 2">Never</option>
        <option value="Option 3">Occasionally</option>
        <option value="Option 3">Frequently</option>
        <option value="Option 3">Always</option>
      </select>
    </div>
  );
};

export default DropDownAnswer;
