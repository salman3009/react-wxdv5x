import React from 'react';
import './style.css';

export default function Card(props) {
  return <div className="box">
    <div>Product Name: {props.productName}</div>
    <div>Color: {props.color}</div>
    <div>Amount: {props.amount}</div>
  </div>;
}
