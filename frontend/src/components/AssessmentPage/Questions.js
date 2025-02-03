import React from 'react';
import SingleQuestion from './SingleQuestion';
import { useUser } from '../../context/UserContext';

const Questions = ({ categoryName }) => {
  const { state } = useUser();
  const questionsArray = state.questionsArray;

  return (
    <div className="questions">
      <form>
      {questionsArray
      .filter((question) => question.category === categoryName)
      .map((question) => (
        <SingleQuestion
          key={question.questionId}
          questionKey={question.questionId}
          text={question.questionText}
          level={question.level}
          relatedPEOCapabilities={question.relatedPEOCapabilities}
          relatedPEOBehaviours={question.relatedPEOBehaviours}
          category={categoryName}
        />
      ))}
      </form>
    </div>
  );
};

export default Questions;
