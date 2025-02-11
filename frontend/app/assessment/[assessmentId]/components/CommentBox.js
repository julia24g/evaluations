import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import axios from 'axios';

const CommentBox = ({ questionKey }) => {
    const [commentText, setCommentText] = useState("");
    const [error, setError] = useState("");
    const { state } = useUser();

    const handleNewCommentClick = () => {
        if (state.userId && commentText.trim() !== "") {
            axios
              .post(`${process.env.NEXT_PUBLIC_API_URL}/api/comments/${state.assessmentId}/${questionKey}`, { 
                userId: state.userId, 
                commentText: commentText 
              })
              .then(() => {
                setCommentText("");
              })
              .catch((error) => {
                console.error("Error creating new comment:", error);
                setError(error.response?.data?.message || "An error occurred");
              });
        }
    };

    return (
        <div className="commentbox">
            <div className="input-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Add a comment" 
                    aria-label="Add a comment" 
                    aria-describedby="basic-addon2"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                />
            </div>
            <button 
                type="button" 
                className="btn btn-primary" 
                onClick={handleNewCommentClick}
            >
                Comment
            </button>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default CommentBox;
