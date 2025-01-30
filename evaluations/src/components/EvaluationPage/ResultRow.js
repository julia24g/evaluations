import React from 'react';

const ResultRow = ({category}) => {

    return (
        <tr>
            <th scope="row">{category}</th>
            <td>Category</td>
            <td>Intermediate</td>
            <td>Senior</td>
            <td>Principal</td>
        </tr>     
    );
}

export default ResultRow;