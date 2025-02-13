"use client"
import React, { useState } from 'react';
import DropDownAnswer from './DropDownAnswer';
import Comments from './Comments';

const SingleQuestion = ({ questionKey, text, level, relatedPEOCapabilities, relatedPEOBehaviours }) => {

  return (
    <div className="single-question container">
      <div className="row">
        <div className="col-9 mb-3">
          <label className="form-label">{text}</label>
          <div className='mt-1'>
            <span className="badge badge-accent">{level}</span>
            {relatedPEOCapabilities.length > 0 && <p className="badge badge-primary">{relatedPEOCapabilities}</p>}
            {relatedPEOBehaviours.length > 0 && <p className="badge badge-secondary">{relatedPEOBehaviours}</p>}
          </div>

        </div>
        <div className="col-2">
          <DropDownAnswer questionKey={questionKey}/>
        </div>
      </div>
    <Comments questionKey={questionKey}/>
    </div>
  );
};

export default SingleQuestion;
