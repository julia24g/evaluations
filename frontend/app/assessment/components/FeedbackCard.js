import React, { useState } from 'react';
import axios from 'axios';

const FeedbackCard = ({ imageSrc, name, text}) => {


    return (
        <div className="card bg-base-100 w-auto shadow-xl">
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Feedback Image"
                className="w-auto h-auto max-w-full"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{text}</p>
                <div className="card-actions justify-end">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
    

}

export default FeedbackCard;