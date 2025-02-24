"use client"
import React, { useState, useEffect } from 'react';

const FeedbackCard = ({ feedbackId, imageData, name, text, onDelete }) => {
    const [imgSize, setImgSize] = useState({ width: 'auto', height: 'auto' });

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
        <div className="card bg-base-100 shadow rounded-lg">
            <figure className="w-full flex">
                <img
                    src={`data:${imageData.mimetype};base64,${imageData.data}`}
                    alt="Feedback Screenshot"
                    className="object-contain rounded-lg"
                    style={{ width: imgSize.width, height: imgSize.height }}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-left">{name}</h2>
                <p className="text-left">{text}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-sm">Edit</button>
                    <button 
                        className="btn btn-error btn-sm"
                        onClick={() => onDelete(feedbackId)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;