import React, { useState } from 'react';

const DropDownAnswer = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <div className="dropdown-answer">
      <label htmlFor={`dropdown`}>Select an answer:</label>
      <select
        id={`dropdown-`}
        value={selectedAnswer}
        onChange={handleChange}
      >
        <option value="">-- Select --</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
    </div>
  );
};

export default DropDownAnswer;
