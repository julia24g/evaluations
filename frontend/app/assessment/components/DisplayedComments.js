"use client";
import React, { useEffect, useState } from "react";
import SingleComment from "./SingleComment";
import CommentBox from "./CommentBox";
import { useUser } from "../../context/UserContext";
import axios from "axios";

const DisplayedComments = ({ questionKey }) => {
  const { state } = useUser();
  const [comments, setComments] = useState([]);
  const [editMode, setEditMode] = useState(() => {
    return localStorage.getItem("presentationEnabled") !== "true";
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const storedValue = localStorage.getItem("presentationEnabled") !== "true";
      setEditMode(storedValue);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      if (!state.userInfo.userId || !state.assessmentInfo.id) return;

      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/comments/${state.assessmentInfo.id}/${questionKey}`
        );
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setError(error.response?.data?.message || "An error occurred");
      } finally {
      }
    };

    fetchComments();
  }, [state.userInfo.userId, state.assessmentInfo.id, questionKey]);

  useEffect(() => {
    const storedValue = localStorage.getItem("presentationEnabled");
    const editModeTemp = storedValue ? storedValue !== "true" : true;
    setEditMode(editModeTemp);
  }, []);
  

  const handleDelete = async (commentId) => {
    if (!commentId) return;

    const previousComments = [...comments];
    setComments((prev) => prev.filter((c) => c.commentid !== commentId));

    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/comments/${commentId}`);
    } catch (error) {
      console.error("Error deleting comments:", error);
      setError(error.response?.data?.message || "An error occurred");
      setComments(previousComments);
    }
  };

  const handleNewComment = async (commentText) => {
    if (!state.userInfo.userId || commentText.trim() === "") return;

    // Create a temporary optimistic comment
    const newComment = {
      commentid: -1,
      userid: state.userInfo.userId,
      commenttext: commentText,
    };

    setComments((prev) => [newComment, ...prev]);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/comments/${state.assessmentInfo.id}/${questionKey}`,
        {
          userId: state.userInfo.userId,
          commentText,
        }
      );

      setComments((prev) =>
        prev.map((c) => (c.commentid === newComment.commentid ? response.data : c))
      );
    } catch (error) {
      console.error("Error creating new comment:", error);
      setError(error.response?.data?.message || "An error occurred");

      setComments((prev) => prev.filter((c) => c.commentid !== newComment.commentid));
    }
  };

  return (
    <div>
      <h3 className="text-base/7 font-semibold text-gray-900">Comments</h3>
      {comments.map((comment) => (
        <SingleComment
          key={comment.commentid}
          commentId={comment.commentid}
          userId={comment.userid}
          text={comment.commenttext}
          onDelete={handleDelete}
        />
      ))}
      {editMode && <CommentBox questionKey={questionKey} onNewComment={handleNewComment} />}
    </div>
  );
};

export default DisplayedComments;