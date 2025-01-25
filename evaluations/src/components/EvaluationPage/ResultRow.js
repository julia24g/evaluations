import React from 'react';

const ResultRow = ({category}) => {
    return (
        <tr>
            <th scope="row">{category}</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
        </tr>     
    );
}

export default ResultRow;