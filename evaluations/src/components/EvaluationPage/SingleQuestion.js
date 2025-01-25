import React from 'react';
import DropDownAnswer from './DropDownAnswer';
import Comments from './Comments';

const SingleQuestion = ({ text, relatedPEOCapabilities, relatedPEOBehaviours }) => {
  return (
    <div className="single-question">
      <p>{text}</p>
      <p>{relatedPEOCapabilities}</p>
      <p>{relatedPEOBehaviours}</p>
      <DropDownAnswer/>
      <Comments/>
    </div>
  );
};

export default SingleQuestion;
