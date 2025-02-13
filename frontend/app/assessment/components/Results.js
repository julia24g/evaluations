"use client";

import React, { useEffect, useState } from "react";
import ResultRow from "./ResultRow";
import { useUser } from "../../context/UserContext";
import LoadingOverlay from "./LoadingOverlay";

const Results = () => {
  const { state, dispatch } = useUser();
  const { questionsMapping, answers, categories, resultStore } = state;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (!answers || !questionsMapping || !resultStore) return;

    const updatedResultStore = JSON.parse(JSON.stringify(resultStore));

    Object.keys(updatedResultStore).forEach((category) => {
      Object.keys(updatedResultStore[category]).forEach((level) => {
        updatedResultStore[category][level].total = 0;
      });
    });

    Object.entries(answers).forEach(([key, value]) => {
      const question = questionsMapping[key];
      if (!question) return;

      const { category, level } = question;
      if (!updatedResultStore[category]) return;

      updatedResultStore[category][level].total += value;
      updatedResultStore[category]["category"].total += value;
    });

    if (JSON.stringify(resultStore) !== JSON.stringify(updatedResultStore)) {
      dispatch({ type: "SET_RESULTSTORE", payload: updatedResultStore });
    }
    setLoading(false);
  }, [answers, questionsMapping, dispatch]);

  return (
    <div>
      {loading && <LoadingOverlay />}
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
