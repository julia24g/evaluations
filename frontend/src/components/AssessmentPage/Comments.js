import React from 'react';
import SingleComment from './SingleComment';
import CommentBox from './CommentBox';

const Comments = (questionKey) => {
  // const comments = [{ userId: 'user1', text: 'This is a great question!' },
  // { userId: 'user2', text: 'I agree with this point.' }]
  // const currentQuestion = questionData.find((x) => x.key === questionKey)

  // return (
  //   <div className="comments">
  //     {/* Sidebar */}
  //     <div
  //         className="sidebar bg-light p-3"
  //         style={{ 
  //           width: '300px', 
  //           height: '100vh', 
  //           position: 'fixed',
  //           right: 0,
  //           top: 0,
  //           overflowY: 'auto',}}
  //     >
  //     <h4>Comments</h4>
  //     <p>{currentQuestion}</p>
  //     {/* Display Comments */}
  //     {comments.length === 0 ? (
  //       <p>No comments yet.</p>
  //     ) : (
  //       comments.map((comment) => (
  //         <SingleComment key={comment.userId} userId={comment.userId} text={comment.text} />
  //       ))
  //     )}
  //     <CommentBox />
    //   </div>
    // </div>
  // );
};

export default Comments;
