// src/components/Form.js
import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [invoice, setInvoice] = useState({});

  const handleChange = (e) => {
    setInvoice({ ...invoice, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(invoice);
    setInvoice({});
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields go here */}
      <button type="submit">Create Invoice</button>
    </form>
  );
};

export default Form;
