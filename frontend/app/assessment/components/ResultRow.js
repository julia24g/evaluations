"use client"
import React from 'react';
import { useUser } from '../../context/UserContext';

const ResultRow = ({ category }) => {
    
    const { state } = useUser();
    const resultStore = state.resultStore || {};

    const levels = ["category", "Intermediate", "Senior", "Principal"];

    const getAverage = (cat, level) => {
        if (!resultStore[cat] || !resultStore[cat][level]) return "N/A";
        const { total = 0, count = 1 } = resultStore[cat][level];
        console.log(total, count)
        return count > 0 ? (total / count).toFixed(2) : "N/A";
    };

    return (
        <tr>
            <th scope="row">{category}</th>
            {levels.map((level) => (
                <td key={level}>{getAverage(category, level)}</td>
            ))}
        </tr>
    );
};

export default ResultRow;
