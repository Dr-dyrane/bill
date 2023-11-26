// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { saveInvoice, loadInvoices } from "../utils/invoice";

const App = () => {
	const [invoices, setInvoices] = useState([]);

	useEffect(() => {
		// Load invoices from local storage on component mount
		setInvoices(loadInvoices());
	}, []);

	const addInvoice = (invoice) => {
		// Add a unique identifier to the invoice (e.g., invoice.id)
		const updatedInvoices = [...invoices, invoice];
		saveInvoice(updatedInvoices);
		setInvoices(updatedInvoices);
	};

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Home invoices={invoices} addInvoice={addInvoice} />}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
};

export default App;
