// src/pages/Home.js
import React from 'react';
import Form from '../components/Form';
import List from '../components/List';

const Home = ({ invoices, addInvoice }) => {
  return (
    <div>
      <Form onSubmit={addInvoice} />
      <List invoices={invoices} />
    </div>
  );
};

export default Home;
