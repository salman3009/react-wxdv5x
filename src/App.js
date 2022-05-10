import React from "react";
import "./style.css";

export default function App() {
   let fullName = "salman";
   let age = 56;
   let flag = true;

   const addition = (a,b)=>{
     return a+b;
   }

  return (
    <div>
       <p>{fullName}</p>
       <p>{age}</p>
       <p>{flag}</p>
       <p>{flag?"true":"false"}</p>
       <p>{2+4}</p>
       <p>{"hi welcome to "+fullName}</p>
       <p>{addition(3,4)}</p>
    </div>
  );
}
