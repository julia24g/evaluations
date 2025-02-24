"use client"
import React, { useState, useEffect } from 'react';
import FeedbackCard from './FeedbackCard';
import FeedbackForm from './FeedbackForm';
import axios from "axios";
import { useUser } from "../../context/UserContext";

const Feedback = () => {
    const { state } = useUser();
    const [feedbackList, setFeedbackList] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const getFeedback = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/feedback/${state.assessmentInfo.id}`);
                setFeedbackList(response.data);
            } catch (error) {
                console.error("Error retrieving feedback:", error);
                setError(error.response?.data?.message || "An error occurred");
            }
        };

        getFeedback();
    }, [state.assessmentInfo.id]);

    const onDelete = async (feedbackId) => {
        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/feedback/${feedbackId}`);
            setFeedbackList((prev) => prev.filter((feedback) => feedback.feedbackId !== feedbackId));
        } catch (error) {
            console.error("Error deleting feedback:", error);
            setError(error.response?.data?.message || "An error occurred");
        }
    };

    const onSubmit = async ({ peerName, feedbackText, file }) => {
        const tempId = `temp-${Date.now()}`;
        const newFeedback = {
            feedbackid: tempId,
            assessmentid: state.assessmentInfo.id,
            peername: peerName,
            feedbacktext: feedbackText,
            image: file
              ? { 
                  data: preview ? preview.split(",")[1] : null, 
                  mimetype: file.type 
                }
              : null
          };
      
        setFeedbackList((prev) => [...prev, newFeedback]);

        const formData = new FormData();
        formData.append("peerName", peerName);
        formData.append("feedbackText", feedbackText);
        formData.append("assessmentId", state.assessmentInfo.id);
        if (file) {
          formData.append("file", file);
        }

        try {
          const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/feedback/`, 
            formData,
            { headers: { "Content-Type": "multipart/form-data" }}
          );
          console.log("Upload successful:", response.data);
          setFeedbackList((prev) =>
            prev.map((feedback) =>
              feedback.feedbackid === tempId ? response.data : feedback
            )
          );
        } catch (error) {
        setFeedbackList((prev) =>
            prev.filter((feedback) => feedback.feedbackId !== tempId)
            );
          console.error("Error submitting feedback:", error);
          setError(error.response?.data?.message || "An error occurred");
        }
      }
    
    return (
        <div className="p-4">
            <div className="flex flex-wrap gap-4 justify-start">
                {feedbackList.map(({ feedbackId, image, peerName, feedbackText }) => (
                    <div key={feedbackId} className="flex-grow">
                        <FeedbackCard 
                            feedbackId={feedbackId} 
                            imageData={image} 
                            name={peerName} 
                            text={feedbackText} 
                            onDelete={onDelete} 
                        />
                    </div>
                ))}
            </div>

            {state.assessmentInfo.status !== 'Complete' &&
                <div className="mt-6">
                    <FeedbackForm handleSubmit={onSubmit} />
                </div>
            }
        </div>
    );
}

export default Feedback;