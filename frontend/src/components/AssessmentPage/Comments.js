import React, { useEffect, useState } from 'react';
import SingleComment from './SingleComment';
import CommentBox from './CommentBox';
import { useUser } from '../../context/UserContext';
import axios from 'axios';

const Comments = ({ questionKey, onExit }) => {
  const { state } = useUser();
  const [error, setError] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (state.userId && state.assessmentId){
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/comments/${state.assessmentId}/${questionKey}`)
        .then((response) => {
          setComments(response.data);
        })
        .catch((error) => {
          console.error("Error fetching comments:", error);
          setError(error.response?.data?.message || "An error occurred");
        })

    }
  }, [state.userId, state.assessmentId, comments])

  const handleDelete = (commentId) => {
    if (state.userId && state.assessmentId){
      axios
        .delete(`${process.env.REACT_APP_API_URL}/api/comments/${commentId}`, { userId: state.userId })
        .then(() => {
          setComments(prev => prev.filter(c => c.commentId !== commentId));
        })
        .catch((error) => {
          console.error("Error deleting comments:", error);
          setError(error.response?.data?.message || "An error occurred");
        })
    }
  }

  return (
    <div className="comments">
      {/* Sidebar */}
      <div
          className="sidebar bg-light p-3"
          style={{ 
            width: '300px', 
            height: '100vh', 
            position: 'fixed',
            right: 0,
            top: 0,
            overflowY: 'auto',}}
      >
      <h4>Comments</h4>
      <button type="button" className="btn" onClick={() => onExit()}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
      </svg>
      </button>
      {/* Display Comments */}
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((comment) => (
          <SingleComment key={comment.commentid} commentId={comment.commentid} userId={comment.userid} text={comment.commenttext} onDelete={handleDelete} />
        ))
      )}
      <CommentBox questionKey={questionKey} />
      </div>
    </div>
  );
};

export default Comments;
