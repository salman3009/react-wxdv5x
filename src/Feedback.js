import React ,{useState} from 'react';
export default function Feedback(props) {

  return <div className="feedback">
         Email Address:<input type="text" onChange={props.addressHandler} value={props.getAddress}/>
  </div>;
}
