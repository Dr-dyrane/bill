// src/components/Form.js
import React, { useState } from "react";

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
		<div className="min-h-screen mt-40 p-4">
			<form onSubmit={handleSubmit}>
				{/* Your form fields go here */}
				<button type="submit">Create Invoice</button>
			</form>
		</div>
	);
};

export default Form;
