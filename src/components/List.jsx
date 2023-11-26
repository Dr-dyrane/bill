// src/components/List.jsx
import React from 'react';
import Invoice from './Invoice';

const List = ({ invoices }) => {
  return (
    <div className="min-h-screen p-4">
      <h2 className="text-3xl font-bold mb-4 mt-20">Invoices</h2>
      {invoices.length === 0 ? (
        <p className="text-gray-600">No invoices available.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {invoices.map((invoice, index) => (
            <li
              key={invoice.id || index}
              className="bg-white p-4 rounded-md shadow-md transition transform hover:scale-105"
            >
              <Invoice items={invoice.items} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;