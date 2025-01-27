import React from 'react';
import Questions from './Questions';

const Category = ({ categoryName, role }) => {
  return (
    <div className="category flex-grow-1 p-3">
      <h2>{categoryName}</h2>
      <Questions role={role} categoryName={categoryName} />
    </div>
  );
};

export default Category;
