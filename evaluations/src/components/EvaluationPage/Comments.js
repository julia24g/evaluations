import React from 'react';
import SingleComment from './SingleComment';

const Comments = () => {
  const comments = [{ userId: 'user1', text: 'This is a great question!' },
  { userId: 'user2', text: 'I agree with this point.' }]
  return (
    <div className="comments">
      <h4>Comments:</h4>
      {/* Add Comment */}
      <div className="input-group">
        <input 
          type="text" 
          class="form-control" 
          placeholder="Add a comment" 
          aria-label="Add a comment" 
          aria-describedby="basic-addon2"
        />
      </div>
      {/* Display Comments */}
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((comment) => (
          <SingleComment key={comment.userId} userId={comment.userId} text={comment.text} />
        ))
      )}
    </div>
  );
};

export default Comments;
