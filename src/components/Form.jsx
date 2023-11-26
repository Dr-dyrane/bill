// src/components/Form.jsx
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineUser, AiOutlineDollarCircle } from "react-icons/ai";
import { BsCalendar, BsCardChecklist } from "react-icons/bs";
import Select from "react-select";
import Invoice from "./Invoice";
import { saveData, loadData } from "../utils/localStorage";

const options = [
  { value: "pending", label: "Pending" },
  { value: "paid", label: "Paid" },
  { value: "overdue", label: "Overdue" },
];

const Form = ({ onSubmit }) => {
    const { register, handleSubmit, formState, setValue, watch } = useForm({
      mode: "onChange",
    });

  const [invoiceItems, setInvoiceItems] = useState([]);
  const [loadedData, setLoadedData] = useState(false);

  useEffect(() => {
    // Load data from local storage when the component mounts
    const savedData = loadData("invoiceData");
    if (savedData) {
      setValue("clientName", savedData.clientName);
      setValue("amount", savedData.amount);
      setValue("dueDate", savedData.dueDate);
      setValue("status", savedData.status);
      setInvoiceItems(savedData.items || []);
    }
    setLoadedData(true);
  }, [setValue]);

  useEffect(() => {
    // Save data to local storage whenever it changes
    if (loadedData) {
      saveData("invoiceData", {
        clientName: watch("clientName"),
        amount: watch("amount"),
        dueDate: watch("dueDate"),
        status: watch("status"),
        items: invoiceItems,
      });
    }
  }, [invoiceItems, watch, loadedData]);

  const handleItemAdd = (item) => {
    setInvoiceItems([...invoiceItems, item]);
  };

  const handleItemRemove = (index) => {
    const updatedItems = [...invoiceItems];
    updatedItems.splice(index, 1);
    setInvoiceItems(updatedItems);
  };

  const handleFormSubmit = (data) => {
    onSubmit({ ...data, items: invoiceItems });
  };

  return (
    <div className="min-h-screen p-4">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mb-4 mt-20">
          <label
            htmlFor="clientName"
            className="block text-sm font-medium text-gray-700"
          >
            Client Name
          </label>
          <div className="mt-1">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <AiOutlineUser className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="clientName"
                {...register("clientName", { required: true })}
                className="p-2.5 focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="John Doe"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount
          </label>
          <div className="mt-1">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <AiOutlineDollarCircle className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                id="amount"
                {...register("amount", { required: true, min: 0 })}
                className="p-2.5 focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="100.00"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="dueDate"
            className="block text-sm font-medium text-gray-700"
          >
            Due Date
          </label>
          <div className="mt-1">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BsCalendar className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="date"
                id="dueDate"
                {...register("dueDate", { required: true })}
                className="p-2.5 focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <div className="mt-1">
            <Select
              id="status"
              {...register("status", { required: true })}
              options={options}
              className="w-full"
              isSearchable={false}
              placeholder="Select Status"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700"
          >
            Invoice Items
          </label>
          {/* Component for adding and displaying invoice items */}
          <Invoice
            items={invoiceItems}
            onItemAdd={handleItemAdd}
            onItemRemove={handleItemRemove}
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          disabled={!formState.isValid}
        >
          <BsCardChecklist className="mr-2 h-5 w-5" />
          Create Invoice
        </button>
      </form>
    </div>
  );
};

export default Form;
