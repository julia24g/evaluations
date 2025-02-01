import React from 'react';
import SingleEmployee from './SingleEmployee';

const EmployeeDirectory = () => {

    const employees = [
        { name: 'John', level: 'Intermediate', role: 'Software Engineer' }
      ];
  return (
    <div className="employee-home-page">
    <h1>Employees</h1>
    <div className="evaluations-list">
      {employees.map((employee, index) => (
        <SingleEmployee
          key={index}
          name={employee.name}
          level={employee.level}
          role={employee.role}
        />
      ))}
    </div>
  </div>

  );
};

export default EmployeeDirectory;
