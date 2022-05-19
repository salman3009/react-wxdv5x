
import React ,{useState}from 'react';
import './Contact.css';


function Contact(){

  const[getOne,setOne]=useState(0);
  const[getTwo,setTwo]=useState(0);
  const[getResult,setResult]=useState(0);

  const addition=()=>{
    alert("addition");
    setResult(Number(getOne)+Number(getTwo));

  }

  const onChangeHandlerOne=(event)=>{
           setOne(event.target.value)
  }

  const onChangeHandlerTwo=(event)=>{
    setTwo(event.target.value)
}


  return (<div>
    <div className="contactBox">Addition:{getResult}</div>
    The value of A:<input type="text" onChange={onChangeHandlerOne} />
    The value of B:<input type="text" onChange={onChangeHandlerTwo}/>
    <button onClick={addition}>Click</button>
  </div>)

}

export default Contact;