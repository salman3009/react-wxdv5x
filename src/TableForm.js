import React from 'react';

function TableForm() {
  return (<div>
    <table>
      <tr>
      <td> First Name:</td>
        <td><input type="text" name="firstName" value=""/></td>
      </tr>
      <tr>
      <td> Age:</td>
        <td><input type="text" name="age" value=""/></td>
      </tr>
      <tr>
      <td> Address:</td>
      <td><input type="text" name="address" value=""/></td>
      </tr>
      <tr>
        <td><button>Submit</button></td>
        </tr>
      </table>
  </div>);
}

export default TableForm;
