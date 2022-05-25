import React from 'react';
import './Table.css';
function Table(){

  return (<div>
    <table className="table"> 
      <tr>
        <th>First Name</th>
        <th>Age</th>
        <th>Address</th>
      </tr>
      <tr>
        <td>salman</td>
        <td>44</td>
        <td>chennai</td>
      </tr>
    </table>
    </div>)

}

export default Table;