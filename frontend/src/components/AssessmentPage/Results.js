import React, { useEffect } from 'react';
import ResultRow from './ResultRow';
import { useUser } from '../../context/UserContext';

const Results = () => {
  const { state, dispatch } = useUser();
  const questionsMapping = state.questionsMapping;
  const answers = state.answers;
  const categories = state.categories;

  useEffect(() => {
    let tempResultStore = { ...state.resultStore };

    Object.keys(tempResultStore).forEach(category => {
      Object.keys(tempResultStore[category]).forEach(level => {
        tempResultStore[category][level].total = 0;
      });
    });
  
    let hasChanges = false;
  
    Object.entries(answers).forEach(([key, value]) => {
      const question = questionsMapping[key];
      console.log(questionsMapping)
      if (!question) return;
  
      const { category, level } = question;
      console.log(category, level)
  
      if (!tempResultStore[category]) {
        console.warn(`Category '${category}' not found in resultStore.`);
        return;
      }
  
      const prevTotal = tempResultStore[category][level].total || 0;
      const prevCategoryTotal = tempResultStore[category]["category"].total || 0;
  
      const newTotal = prevTotal + value;
      const newCategoryTotal = prevCategoryTotal + value;
  
      if (prevTotal !== newTotal) {
        hasChanges = true;
        tempResultStore[category][level].total = newTotal;
        tempResultStore[category]["category"].total = newCategoryTotal;
      }
    });
  
    if (hasChanges) {
      dispatch({ type: "SET_RESULTSTORE", payload: tempResultStore });
    }
    console.log(tempResultStore)
  }, [answers, questionsMapping, dispatch]);
  

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
          {categories.map((c) => (
            <ResultRow key={c.key} category={c.name} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
