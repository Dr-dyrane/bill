import React, { useState } from "react";
import UserDetailInput from "./UserDetailInput";
import ClientDetailInput from "./ClientDetailInput";
import InvoiceItemInput from "./InvoiceItemInput";
import SelectInput from "./SelectInput";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const options = ["USD", "EUR", "GBP"];

const InvoiceForm = () => {
	const [userDetails, setUserDetails] = useState({ name: "", email: "" });
	const [clientDetails, setClientDetails] = useState({ name: "", address: "" });
	const [items, setItems] = useState([]);
	const [currency, setCurrency] = useState("USD");
	const [discount, setDiscount] = useState(0);
	const [tax, setTax] = useState(0);

	const handleItemChange = (index, key, value) => {
		const updatedItems = [...items];
		updatedItems[index][key] = value;
		setItems(updatedItems);
	};

	const handleAddItem = () => {
		setItems([...items, { description: "", quantity: 1, price: 0 }]);
	};

	const handleRemoveItem = (index) => {
		const updatedItems = [...items];
		updatedItems.splice(index, 1);
		setItems(updatedItems);
	};

	const calculateTotal = () => {
		const subtotal = items.reduce(
			(total, item) => total + item.quantity * item.price,
			0
		);
		const totalDiscount = (discount / 100) * subtotal;
		const totalTax = (tax / 100) * subtotal;
		return subtotal - totalDiscount + totalTax;
	};

	return (
		<div className="max-w-screen-md mx-auto">
			<UserDetailInput
				label="Your Name"
				value={userDetails.name}
				onChange={(value) => setUserDetails({ ...userDetails, name: value })}
				placeholder="Your Name"
			/>

			<UserDetailInput
				label="Your Email"
				value={userDetails.email}
				onChange={(value) => setUserDetails({ ...userDetails, email: value })}
				placeholder="Your Email"
			/>

			<ClientDetailInput
				label="Client Name"
				value={clientDetails.name}
				onChange={(value) =>
					setClientDetails({ ...clientDetails, name: value })
				}
				placeholder="Client Name"
			/>

			<ClientDetailInput
				label="Client Address"
				value={clientDetails.address}
				onChange={(value) =>
					setClientDetails({ ...clientDetails, address: value })
				}
				placeholder="Client Address"
				textarea
			/>

			<table className="w-full mb-4">
				<thead>
					<tr>
						<th className="text-left">Description</th>
						<th className="text-left">Quantity</th>
						<th className="text-left">Price</th>
						<th className="text-left">Total</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{items.map((item, index) => (
						<tr key={index}>
							<td>
								<input
									type="text"
									value={item.description}
									onChange={(e) =>
										handleItemChange(index, "description", e.target.value)
									}
									className="p-2 border border-gray-300 rounded-md w-full"
									placeholder="Item description"
								/>
							</td>
							<td>
								<input
									type="number"
									value={item.quantity}
									onChange={(e) =>
										handleItemChange(
											index,
											"quantity",
											parseInt(e.target.value)
										)
									}
									className="p-2 border border-gray-300 rounded-md w-full"
									placeholder="Quantity"
								/>
							</td>
							<td>
								<input
									type="number"
									value={item.price}
									onChange={(e) =>
										handleItemChange(index, "price", parseFloat(e.target.value))
									}
									className="p-2 border border-gray-300 rounded-md w-full"
									placeholder="Price"
								/>
							</td>
							<td>${(item.quantity * item.price).toFixed(2)}</td>
							<td>
								<AiOutlineMinusCircle
									className="text-red-500 cursor-pointer"
									onClick={() => handleRemoveItem(index)}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>

      <SelectInput
        label="Currency"
        value={currency}
        onChange={(value) => setCurrency(value)}
        options={options}
      />

      <div className="mb-4">
        <label
          htmlFor="discount"
          className="block text-sm font-medium text-gray-700"
        >
          Discount (%)
        </label>
        <input
          type="number"
          id="discount"
          value={discount}
          onChange={(e) => setDiscount(parseFloat(e.target.value))}
          className="p-2 border border-gray-300 rounded-md w-full"
          placeholder="Discount"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="tax"
          className="block text-sm font-medium text-gray-700"
        >
          Tax (%)
        </label>
        <input
          type="number"
          id="tax"
          value={tax}
          onChange={(e) => setTax(parseFloat(e.target.value))}
          className="p-2 border border-gray-300 rounded-md w-full"
          placeholder="Tax"
        />
      </div>

      <div className="mb-4">
        <strong>Subtotal:</strong> $
        {(calculateTotal() - (discount / 100) * calculateTotal()).toFixed(2)}
      </div>
      <div className="mb-4">
        <strong>Discount:</strong> $
        {(discount / 100) * calculateTotal().toFixed(2)}
      </div>
      <div className="mb-4">
        <strong>Tax:</strong> ${(tax / 100) * calculateTotal().toFixed(2)}
      </div>
      <div>
        <strong>Total:</strong> ${calculateTotal().toFixed(2)}
      </div>

      {/* Add Item Button */}
      <div className="flex space-x-2">
        <AiOutlinePlusCircle
          className="text-green-500 cursor-pointer"
          onClick={handleAddItem}
        />
        <span>Add Item</span>
      </div>
    </div>
  );
};

export default InvoiceForm;
