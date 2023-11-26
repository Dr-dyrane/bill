// src/components/Invoice.jsx
import React, { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const Invoice = ({ items, onItemAdd, onItemRemove }) => {
  const [newItem, setNewItem] = useState({ description: "", cost: 0, discount: 0 });

  const handleItemChange = (index, key, value) => {
    const updatedItems = [...items];
    updatedItems[index][key] = value;
    onItemAdd(updatedItems);
  };

  const handleAddItem = () => {
    onItemAdd([...items, newItem]);
    setNewItem({ description: "", cost: 0, discount: 0 });
  };

  return (
    <div>
      <table className="w-full mt-2 mb-4">
        <thead>
          <tr>
            <th className="text-left">Description</th>
            <th className="text-left">Cost</th>
            <th className="text-left">Discount (%)</th>
            <th className="text-left">Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items && items.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={item.description}
                  onChange={(e) => handleItemChange(index, "description", e.target.value)}
                  className="p-2 border border-gray-300 rounded-md w-full"
                  placeholder="Item description"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.cost}
                  onChange={(e) => handleItemChange(index, "cost", parseFloat(e.target.value))}
                  className="p-2 border border-gray-300 rounded-md w-full"
                  placeholder="Cost"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.discount}
                  onChange={(e) => handleItemChange(index, "discount", parseFloat(e.target.value))}
                  className="p-2 border border-gray-300 rounded-md w-full"
                  placeholder="Discount (%)"
                />
              </td>
              <td>{((1 - item.discount / 100) * item.cost).toFixed(2)}</td>
              <td>
                <AiOutlineMinusCircle
                  className="text-red-500 cursor-pointer"
                  onClick={() => onItemRemove(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex space-x-2">
        <input
          type="text"
          value={newItem.description}
          onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
          className="p-2 border border-gray-300 rounded-md"
          placeholder="New item description"
        />
        <input
          type="number"
          value={newItem.cost}
          onChange={(e) => setNewItem({ ...newItem, cost: parseFloat(e.target.value) })}
          className="p-2 border border-gray-300 rounded-md"
          placeholder="New item cost"
        />
        <input
          type="number"
          value={newItem.discount}
          onChange={(e) => setNewItem({ ...newItem, discount: parseFloat(e.target.value) })}
          className="p-2 border border-gray-300 rounded-md"
          placeholder="New item discount (%)"
        />
        <AiOutlinePlusCircle className="text-green-500 cursor-pointer" onClick={handleAddItem} />
      </div>
    </div>
  );
};

export default Invoice;
