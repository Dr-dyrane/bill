// src/components/List.js
import React from 'react';

const List = ({ invoices }) => {
  return (
    <div>
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
