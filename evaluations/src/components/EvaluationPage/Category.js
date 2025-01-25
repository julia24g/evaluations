import React from 'react';
import Questions from './Questions';

const Category = ({ categoryName, roles, level }) => {
  return (
    <div className="category-tab">
      <h2>{categoryName}</h2>
      {roles.map(role => (
        <div key={role}>
          <h3>{role}</h3>
          <Questions role={role} level={level} categoryName={categoryName} />
        </div>
      ))}
    </div>
  );
};

export default Category;
