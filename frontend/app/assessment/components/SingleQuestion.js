"use client";
import React, { useState } from "react";
import DropDownAnswer from "./DropDownAnswer";
import Comments from "./Comments";

const SingleQuestion = ({ questionKey, text, level, relatedPEOCapabilities, relatedPEOBehaviours }) => {

  return (
    <div className="single-question w-full p-4 bg-base-100">
      <div className="flex items-center">
        <div className="w-9/12">
          <label className="">{text}</label>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="badge badge-accent">{level}</span>
            {relatedPEOCapabilities.length > 0 && (
              <span className="badge badge-primary">{relatedPEOCapabilities}</span>
            )}
            {relatedPEOBehaviours.length > 0 && (
              <span className="badge badge-secondary">{relatedPEOBehaviours}</span>
            )}
          </div>
        </div>

        <div className="w-2/12">
          <DropDownAnswer questionKey={questionKey} />
        </div>

        <div className="w-1/12 flex justify-end">
          <Comments questionKey={questionKey} />
        </div>
      </div>
    </div>
  );
};

export default SingleQuestion;
