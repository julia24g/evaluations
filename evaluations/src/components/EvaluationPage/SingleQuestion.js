import React from 'react';
import DropDownAnswer from './DropDownAnswer';
import Comments from './Comments';

const SingleQuestion = ({ text, level, relatedPEOCapabilities, relatedPEOBehaviours }) => {
  return (
    <div className="single-question">
      <div className="mb-3">
      <label className="form-label">{text}</label>
      <DropDownAnswer/>
    </div>
    <p>{level}</p>
    <p>{relatedPEOCapabilities}</p>
    <p>{relatedPEOBehaviours}</p>
    <button>See Comments</button>
    <Comments/>
    </div>
  );
};

export default SingleQuestion;
