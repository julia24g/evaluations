import React from 'react';

const Tab = ({ name, isSelected, onClick }) => {
  return (
    <div
      className={`tab ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(name)}
    >
      {name}
    </div>
  );
};

export default Tab;
