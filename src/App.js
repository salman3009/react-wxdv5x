import React, { useState } from 'react';
import './style.css';
import Table from './Table';
import TableForm from './TableForm';

export default function App() {
  return (
    <div className="grid-container">
      <Table />
      <br/>
      <TableForm/>
    </div>
  );
}
