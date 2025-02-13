"use client";

import React, { useState } from "react";
import { useUser } from "../../context/UserContext";
import axios from "axios";

const CommentBox = ({ questionKey }) => {
  const [commentText, setCommentText] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { state } = useUser();

  const handleNewCommentClick = async () => {
    if (!state.userId || commentText.trim() === "") return;

    setLoading(true);

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/comments/${state.assessmentId}/${questionKey}`,
        {
          userId: state.userId,
          commentText,
        }
      );

      setCommentText("");
      setError("");
    } catch (error) {
      console.error("Error creating new comment:", error);
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="commentbox">
      <div className="input-group">
        <input
          type="text"
          className="input w-full max-w-xs"
          placeholder="Add a comment"
          aria-label="Add a comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          disabled={loading}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleNewCommentClick}
        disabled={loading}
      >
        {loading ? "Submitting..." : "Comment"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default CommentBox;
