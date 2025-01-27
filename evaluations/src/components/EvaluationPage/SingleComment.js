import React from 'react';

const SingleComment = ({ userId, text }) => {
  return (
    <div className="card comment">
      <div className="card-body">
        <p><strong>User {userId}:</strong> {text}</p>
      </div>
    </div>
  );
};

export default SingleComment;
