import React from 'react';

const SingleComment = ({ userId, text }) => {
  return (
    <div className="comment">
      <p><strong>User {userId}:</strong> {text}</p>
    </div>
  );
};

export default SingleComment;
