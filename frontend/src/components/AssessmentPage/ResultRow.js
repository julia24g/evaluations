import React from 'react';
import { useSelector } from 'react-redux';
import { useUser } from '../../context/UserContext';

const ResultRow = ({ category }) => {

    // get questions per category per role per level?

    const { state } = useUser();

    // const answers = useSelector((state) => state.answers.answers);

    // if (!answers?.[category]) return null;
    // const scores = {};
    // let numCategoryQs = 0;
    // let categoryTotal = 0;

    // Object.entries(answers[category]).forEach(([level, questions]) => {
    //     let numLevelQs = 0;
    //     let levelTotal = 0;

    //     Object.values(questions).forEach((q) => {
    //         if (q.answer in answerMapping) {
    //             numLevelQs += 1;
    //             levelTotal += answerMapping[q.answer];
    //         }
    //     });

    //     scores[level] = numLevelQs > 0 ? levelTotal / numLevelQs : 0;
    //     numCategoryQs += numLevelQs;
    //     categoryTotal += levelTotal;
    // });

    // scores["Category"] = numCategoryQs > 0 ? categoryTotal / numCategoryQs : 0;

    return (
        <tr>
            {/* <th scope="row">{category}</th>
            <td>{scores["Category"].toFixed(2)}</td>
            <td>{scores["Intermediate"]?.toFixed(2) || "N/A"}</td>
            <td>{scores["Senior"]?.toFixed(2) || "N/A"}</td>
            <td>{scores["Principal"]?.toFixed(2) || "N/A"}</td> */}
        </tr>
    );
};

export default ResultRow;
