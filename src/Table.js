import React from 'react';
import './Table.css';
function Table(props){

  return (<div>
    <table className="table"> 
      <tr>
        <th>First Name</th>
        <th>Age</th>
        <th>Address</th>
      </tr>
      <tr>
        <td>{props.firstName}</td>
        <td>{props.age}</td>
        <td>{props.address}</td>
      </tr>
    </table>
    </div>)

}

export default Table;