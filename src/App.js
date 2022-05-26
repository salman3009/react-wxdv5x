import React, { useState } from 'react';
import './style.css';
import Table from './Table';
import TableForm from './TableForm';

export default function App() {

   const [getDetails,setDetails]=useState({
     firstName:'salman',
     age:'33',
     address:'chennai'
   })

   const onUpdateHandler=(firstName,age,address)=>{
     setDetails({
       firstName:firstName,
       age:age,
       address:address
     })
   }

  return (
    <div className="grid-container">
      <Table firstName={getDetails.firstName} age={getDetails.age}
       address={getDetails.address}
      />
      <br/>
      <TableForm onUpdate={(firstName,age,address)=>onUpdateHandler(firstName,age,address)}/>
    </div>
  );
}
