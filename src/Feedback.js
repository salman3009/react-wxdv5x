import React ,{useState} from 'react';
export default function Feedback() {
  const [getAddress,setAddress] = useState("salman@gmail.com")

  const addressHandler=(event)=>{
    setAddress(event.target.value)
  }


  return <div className="feedback">
         Email Address:<input type="text" onChange={addressHandler} value={getAddress}/>

         <div>{getAddress}</div>
  </div>;
}
