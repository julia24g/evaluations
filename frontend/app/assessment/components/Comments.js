"use client"
import React, { useEffect, useState } from 'react';
import SingleComment from './SingleComment';
import CommentBox from './CommentBox';
import { useUser } from '../../context/UserContext';
import axios from 'axios';

const Comments = ({ questionKey }) => {
  const { state } = useUser();
  const [error, setError] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (state.userId && state.assessmentId){
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/api/comments/${state.assessmentId}/${questionKey}`)
        .then((response) => {
          setComments(response.data);
        })
        .catch((error) => {
          console.error("Error fetching comments:", error);
          setError(error.response?.data?.message || "An error occurred");
        })

    }
  }, [state.userId, state.assessmentId])

  const handleDelete = (commentId) => {
    if (state.userId && state.assessmentId){
      axios
        .delete(`${process.env.NEXT_PUBLIC_API_URL}/api/comments/${commentId}`, { data: { userId: state.userId } })
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
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-4" className="btn btn-primary drawer-button">Open drawer</label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <h4>Comments</h4>
            {/* Display Comments */}
            {comments.length === 0 ? (
              <p>No comments yet.</p>
            ) : (
              comments.map((comment) => (
                <SingleComment key={comment.commentid} commentId={comment.commentid} userId={comment.userid} text={comment.commenttext} onDelete={handleDelete} />
              ))
            )}
            <CommentBox questionKey={questionKey} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Comments;
