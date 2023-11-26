// src/pages/Home.js
import React from 'react';
import Form from '../components/Form';
import List from '../components/List';

const Home = ({ invoices, addInvoice }) => {
    return (
        <div className="container mx-auto p-4">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-500">Your Invoice App</h1>
            <p className="text-gray-600">Create and manage beautiful invoices with ease.</p>
          </header>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <Form onSubmit={addInvoice} />
            </div>
            <div className="w-full md:w-1/2">
              <List invoices={invoices} />
            </div>
          </div>
        </div>
      );
    };
    
    export default Home;
