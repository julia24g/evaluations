"use client"
import React, { useState, useEffect } from 'react';
import { useUser } from "../../context/UserContext";

const FeedbackCard = ({ feedbackId, imageData, name, text, onDelete }) => {
    const [imgSize, setImgSize] = useState({ width: 'auto', height: 'auto' });
    const { state } = useUser();
    const buttonsActive = state.assessmentInfo.status !== 'Complete';

    useEffect(() => {
        if (imageData) {
            const img = new Image();
            img.src = `data:${imageData.mimetype};base64,${imageData.data}`;
            img.onload = () => {
                setImgSize({ width: img.width, height: img.height });
            };
        }
    }, [imageData]);

    return (
        <div 
            className="card bg-base-100 shadow rounded-lg overflow-hidden"
            style={{ width: imgSize.width, height: imgSize.height }}
            >
            {imageData && 
                <figure className="flex">
                    <img
                        src={`data:${imageData.mimetype};base64,${imageData.data}`}
                        alt="Feedback Screenshot"
                        className="object-contain rounded-lg"
                        style={{ width: imgSize.width, height: imgSize.height }}
                    />
                </figure>
            }      
            <div className="card-body p-2">
                <h2 className="card-title text-left">{name}</h2>
                <p className="text-left">{text}</p>
                {/* Action Buttons */}
                {buttonsActive && 
                <div className="mt-2 flex justify-end space-x-2 text-xs text-gray-500">
                    <button className="hover:underline">Edit</button>
                    <span>·</span>
                    <button onClick={() => onDelete(feedbackId)} className="hover:underline text-red-600">
                    Delete
                    </button>
                </div>
                }
            </div>
        </div>
    );
};

export default FeedbackCard;