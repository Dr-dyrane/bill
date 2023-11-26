// src/components/List.js
import React from 'react';

const List = ({ invoices }) => {
  return (
    <div className='min-h-screen mt-40 p-4'>
      <h2>Invoices</h2>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>{/* Display invoice details */}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
