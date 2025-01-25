import React from 'react';
import SingleEvaluation from './SingleEvaluation';

const EmployeeHome = () => {
  // Sample array of evaluations
  const evaluations = [
    { status: 'Pending', date: '2025-01-15', deadline: '2025-01-20' },
    { status: 'Completed', date: '2025-01-10', deadline: '2025-01-12' },
    { status: 'In Progress', date: '2025-01-05', deadline: '2025-01-25' },
  ];

  return (
    <div className="employee-home-page">
      <h1>Employee Evaluations</h1>
      <div className="evaluations-list">
        {evaluations.map((evaluation, index) => (
          <SingleEvaluation
            key={index}
            status={evaluation.status}
            date={evaluation.date}
            deadline={evaluation.deadline}
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeeHome;
