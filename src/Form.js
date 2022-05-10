import React , {useState}from 'react';
import './style.css';

export default function Form(props) {
  const[getProduct,setProduct]=useState("moto");
  //  var productName = "moto";
  //  setTimeout(()=>{
  //   setProduct("sony");
  //  },3000)

   const onChangeHandler=(event)=>{
    setProduct(event.target.value);
   }
  return <div>
   <form>
     Product Name:<input type="text" onChange={onChangeHandler} value={getProduct}  id="productName" name="productName"/><br/>
     Product color:<input type="text" id="productColor" name="productColor"/><br/>
     Product Amount:<input type="text" id="productAmount"
     name="productAmount"/><br/>
     {getProduct}
   </form>
  </div>
}
