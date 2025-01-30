import React from 'react';
import SingleQuestion from './SingleQuestion';
import questionData from '../../staticdata/questionData';

const Questions = ({role, categoryName}) => {
  return (
    <div className="questions">
      <form>
      {questionData
      .filter((question) => question.role === role && question.category === categoryName)
      .map((question) => (
        <SingleQuestion
          key={question.key}
          questionKey={question.key}
          text={question.question}
          level={question.level}
          relatedPEOCapabilities={question.relatedPEOCapabilities}
          relatedPEOBehaviours={question.relatedPEOBehaviours}
          category={categoryName}
          role={role}
        />
      ))}
      </form>
    </div>
  );
};

export default Questions;
