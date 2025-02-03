import React from 'react';
import ResultRow from './ResultRow';
import { useUser } from '../../context/UserContext';

const Results = () => {
  const { state } = useUser();
  const questionsMapping = state.questionsMapping;
  const answers = state.answers;
  const categories = state.categories;

  Object.entries(answers).forEach(([key, value]) => {

    const category = questionsMapping[key].category;
    const level = questionsMapping[key].level;

  });
    
  // add to the respective score array

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