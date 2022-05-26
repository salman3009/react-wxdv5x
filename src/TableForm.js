import React, {useState} from 'react';

function TableForm(props) {

  const [getTable,setTable] = useState({
    firstName:"",
    age:'22',
    address:''
  });

  const setChangeHandler=(event)=>{
      setTable({
        ...getTable,
        [event.target.name]:event.target.value

      })
  }

  const onSubmitHandler =()=>{
    props.onUpdate(getTable.firstName,getTable.age,getTable.address)

  }

  return (<div>
    <table>
      <tr>
      <td> First Name:</td>
        <td><input type="text" onChange={setChangeHandler} name="firstName" value={getTable.firstName}/></td>
      </tr>
      <tr>
      <td> Age:</td>
        <td><input type="text" name="age" onChange={setChangeHandler} value={getTable.age}/></td>
      </tr>
      <tr>
      <td> Address:</td>
      <td><input type="text" onChange={setChangeHandler}  name="address" value={getTable.address}/></td>
      </tr>
      <tr>
        <td><button onClick={onSubmitHandler}>Submit</button></td>
        </tr>
      </table>
  </div>);
}

export default TableForm;
