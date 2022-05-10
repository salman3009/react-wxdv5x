import React from 'react';
import './style.css';
import Card from './Card';
export default function App() {
  let fullName = 'salman';
  let age = 56;
  let flag = true;

  const addition = (a, b) => {
    return a + b;
  };

  return (
    <div>
      <Card productName="sony" color="blue" amount="4000" />
      <Card productName="samsung" color="green" amount="5000" />
      <Card productName="htc" color="yellow" amount="4000" />
      {/* <p>{fullName}</p>
       <p>{age}</p>
       <p>{flag}</p>
       <p>{flag?"true":"false"}</p>
       <p>{2+4}</p>
       <p>{"hi welcome to "+fullName}</p>
       <p>{addition(3,4)}</p> */}
    </div>
  );
}
