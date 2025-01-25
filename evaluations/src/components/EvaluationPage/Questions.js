import React from 'react';
import SingleQuestion from './SingleQuestion';

const Questions = ({category, level, role}) => {
  const questionData = [ // all questions should live here
    {
      id: 1,
      category: "A",
      text: "What are the key challenges in your role?",
      relatedPEOCapabilities: "Problem Solving, Communication",
      relatedPEOBehaviours: "Adaptability, Leadership"
    },
    {
      id: 2,
      category: "B",
      text: "How do you prioritize tasks?",
      relatedPEOCapabilities: "Time Management",
      relatedPEOBehaviours: "Decision Making"
    }
  ];

  return (
    <div className="questions">
      {questionData.map((question) => (
        <SingleQuestion
          key={question.id}
          text={question.text}
          relatedPEOCapabilities={question.relatedPEOCapabilities}
          relatedPEOBehaviours={question.relatedPEOBehaviours}
        />
      ))}
    </div>
  );
};

export default Questions;
