"use client"
import React from 'react';
import Questions from './Questions';

const Category = ({ categoryName }) => {
  return (
    <div className="flex-grow-1 p-3">
      <h2>{categoryName}</h2>
      <Questions categoryName={categoryName} />
    </div>
  );
};

export default Category;
