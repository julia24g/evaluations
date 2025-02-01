import React from 'react';

const SingleEvaluation = ({ status, date, deadline }) => {
  return (
    <div className="single-evaluation">
      <button className="evaluation-button">
        <div>Status: {status}</div>
        <div>Date: {date}</div>
        <div>Deadline: {deadline}</div>
      </button>
    </div>
  );
};

export default SingleEvaluation;
