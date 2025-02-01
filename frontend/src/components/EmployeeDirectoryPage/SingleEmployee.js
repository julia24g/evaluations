import React from 'react';

const SingleEmployee = ({ name, level, role }) => {
  return (
    <div className="single-evaluation">
      <button className="evaluation-button">
        <div>Name: {name}</div>
        <div>Level: {level}</div>
        <div>Role: {role}</div>
      </button>
    </div>
  );
};

export default SingleEmployee;
