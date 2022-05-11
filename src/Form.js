import React, { useState } from 'react';
import './style.css';

export default function Form(props) {
  const [getForm, setForm] = useState({
    productName: '',
    productColor: '',
    productAmount: '',
  });

  const [getFormValidation, setFormValidation] = useState({
    productName: false,
    productColor: false,
    productAmount: false
  });
  //  var productName = "moto";
  //  setTimeout(()=>{
  //   setProduct("sony");
  //  },3000)

  const onChangeHandler = (event) => {
    setForm({ ...getForm, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    alert('submit');
      setFormValidation({...getFormValidation,productName:getForm.productName?false:true,
      productColor:getForm.productColor?false:true,
      productAmount:getForm.productAmount?false:true
      })
    
  };

  

  return (
    <div>
      <form>
        Product Name:
        <input
          type="text"
          onChange={onChangeHandler}
          value={getForm.productName}
          id="productName"
          name="productName"
        />
        {getFormValidation.productName && <div style={{ fontSize: '12px', color: 'red' ,padding:"20px"}}>
            Please provide the productName
        </div>}
        <br />
        Product color:
        <input
          type="text"
          onChange={onChangeHandler}
          value={getForm.productColor}
          id="productColor"
          name="productColor"
        />
          {getFormValidation.productColor && <div style={{ fontSize: '12px', color: 'red' }}>
            Please provide the productColor
        </div>}
        <br />
        Product Amount:
        <input
          type="text"
          onChange={onChangeHandler}
          value={getForm.productAmount}
          id="productAmount"
          name="productAmount"
        />
          {getFormValidation.productAmount && <div style={{ fontSize: '12px', color: 'red' }}>
            Please provide the productAmount
        </div>}
        <br />
        <div>
          {getForm.productName}-{getForm.productColor}-{getForm.productAmount}
        </div>
        <button onClick={onSubmitHandler}>Submit</button>
      </form>
    </div>
  );
}
