import React from 'react';
import questionData from '../../staticdata/questionData';
import ResultRow from './ResultRow';

const Results = ({role}) => {

    const categories = Array.from(
        new Set(
          questionData
            .filter((question) => question.role === role)
            .map((question) => question.category)
        )
      ).map((category, index) => ({ key: index, name: category }));

    console.log(categories);

  return (
    <div className="results">
        <table className="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Category</th>
            <th scope="col">Intermediate</th>
            <th scope="col">Senior</th>
            <th scope="col">Principal</th>
            </tr>
        </thead>
        <tbody>
            {categories
            .map((c) => <ResultRow key={c.key} category={c.name}/>)}
        </tbody>
        </table>

    </div>
  );
};

export default Results;