import React from 'react';
import './style.css';
import Card from './Card';
import Form from './Form';
import Header from './Header';
import Feedback from './Feedback';
export default function App() {

  return (
    <div className="grid-container">
      <Header/>
      <div><Feedback/></div>
      <div>
      <Card productName="sony" color="blue" amount="4000" />
      <Card productName="samsung" color="green" amount="5000" />
      <Card productName="htc" color="yellow" amount="4000" />
      </div>
  
   
    </div>
  );
}
