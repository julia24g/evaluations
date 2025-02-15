"use client"
import React, { useEffect, useState } from 'react';
import SingleComment from './SingleComment';
import CommentBox from './CommentBox';
import { useUser } from '../../context/UserContext';
import axios from 'axios';
import LoadingOverlay from './LoadingOverlay';

const Comments = ({ questionKey }) => {
  const { state } = useUser();
  const [error, setError] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    if (state.userInfo.userId && state.assessmentInfo.id){
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/api/comments/${state.assessmentInfo.id}/${questionKey}`)
        .then((response) => {
          setComments(response.data);
        })
        .catch((error) => {
          console.error("Error fetching comments:", error);
          setError(error.response?.data?.message || "An error occurred");
        })

    }
    setLoading(false);
  }, [state.userInfo.userId, state.assessmentInfo.id])

  const handleDelete = (commentId) => {
    if (state.userInfo.userId && state.assessmentInfo.id){
      axios
        .delete(`${process.env.NEXT_PUBLIC_API_URL}/api/comments/${commentId}`, { data: { userId: state.userInfo.userId } })
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
          <div className="indicator">
            {comments.length > 0 && (
              <span className="indicator-item badge badge-secondary">{comments.length}</span>
            )}
            <label htmlFor="my-drawer-4" className="drawer-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-chat-left-text"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
              </svg>
            </label>
          </div>
        </div>
        <div className="drawer-side">
          {loading && <LoadingOverlay />}
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
