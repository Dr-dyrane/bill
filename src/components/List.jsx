// src/components/List.jsx
import React from 'react';
import { BiDollarCircle } from 'react-icons/bi';
import { FaCalendarAlt, FaUserAlt, FaClipboardList } from 'react-icons/fa';

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
              key={invoice.id || index}  // Use the invoice ID as the key if available, otherwise use the index
              className="bg-white p-4 rounded-md shadow-md transition transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-500">
                  <BiDollarCircle className="inline-block mr-2" />
                  {invoice.amount}
                </span>
                <span className="text-gray-500">
                  <FaCalendarAlt className="inline-block mr-2" />
                  {invoice.dueDate}
                </span>
              </div>
              <div className="mb-2">
                <span className="text-gray-700">
                  <FaUserAlt className="inline-block mr-2" />
                  {invoice.clientName}
                </span>
              </div>
              <div>
                <span className={`text-${getStatusColor(invoice.status)}`}>
                  <FaClipboardList className="inline-block mr-2" />
                  {invoice.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case 'pending':
      return 'yellow-500';
    case 'paid':
      return 'green-500';
    case 'overdue':
      return 'red-500';
    default:
      return 'gray-500';
  }
};

export default List;
