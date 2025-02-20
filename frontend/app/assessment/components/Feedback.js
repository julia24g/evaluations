import React, { useState } from 'react';
import FeedbackCard from './FeedbackCard';

const Feedback = () => {
    const [feedbackList, setFeedbackList] = useState([])

    useEffect(() => {
        const getFeedback = async = () => {
            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/feedback/${state.assessmentInfo.id}`);
                setFeedbackList(response.data);
            }
            catch (error) {
                console.error("Error submitting feedback:", error);
                setError(error.response?.data?.message || "An error occurred");
            }
        }

        getFeedback();
    })
    
    return (
        {feedbackList.map(({ }) => {
            <FeedbackCard />
        })}
    );
}

export default Feedback;