import React from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";

const InvoiceItemInput = ({ item, onChange, onRemove }) => (
  <tr>
    <td>
      <input
        type="text"
        value={item.description}
        onChange={(e) => onChange("description", e.target.value)}
        className="p-2 border border-gray-300 rounded-md w-full"
        placeholder="Item description"
      />
    </td>
    <td>
      <input
        type="number"
        value={item.quantity}
        onChange={(e) => onChange("quantity", parseInt(e.target.value))}
        className="p-2 border border-gray-300 rounded-md w-full"
        placeholder="Quantity"
      />
    </td>
    <td>
      <input
        type="number"
        value={item.price}
        onChange={(e) => onChange("price", parseFloat(e.target.value))}
        className="p-2 border border-gray-300 rounded-md w-full"
        placeholder="Price"
      />
    </td>
    <td>{(item.quantity * item.price).toFixed(2)}</td>
    <td>
      <AiOutlineMinusCircle
        className="text-red-500 cursor-pointer"
        onClick={onRemove}
      />
    </td>
  </tr>
);

export default InvoiceItemInput;
