"use client"
import React from 'react';
import SingleQuestion from './SingleQuestion';
import { useUser } from '../../context/UserContext';

const Questions = ({ categoryName }) => {
  const { state } = useUser();
  const questionsArray = state.questionsArray;

  return (
    <div className="questions">
      {questionsArray
      .filter((question) => question.category === categoryName)
      .map((question) => (
          <SingleQuestion
            key={question.questionid}
            questionKey={question.questionid}
            text={question.questiontext}
            level={question.level}
            relatedPEOCapabilities={question.relatedpeocapabilities || ""}
            relatedPEOBehaviours={question.relatedpeobehaviours || ""}
          />
      ))}
    </div>
  );
};

export default Questions;
