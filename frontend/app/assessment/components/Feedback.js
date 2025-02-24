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

    console.log(state.assessmentInfo.status);

    useEffect(() => {
        const getFeedback = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/feedback/${state.assessmentInfo.id}`);
                console.log("here")
                setFeedbackList(response.data);
            } catch (error) {
                console.error("Error retrieving feedback:", error);
                setError(error.response?.data?.message || "An error occurred");
            }
        };

        getFeedback();
    }, [state.assessmentInfo.id]);

    console.log(state.assessmentInfo.id);

    const onDelete = async (feedbackId) => {
        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/feedback/${feedbackId}`);
            setFeedbackList((prev) => prev.filter((feedback) => feedback.feedbackId !== feedbackId));
        } catch (error) {
            console.error("Error deleting feedback:", error);
            setError(error.response?.data?.message || "An error occurred");
        }
    };
    
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
                    <FeedbackForm />
                </div>
            }
        </div>
    );
}

export default Feedback;