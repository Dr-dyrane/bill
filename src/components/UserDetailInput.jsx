import React from "react";

const UserDetailInput = ({ label, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label htmlFor={label} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type="text"
      id={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border border-gray-300 rounded-md w-full"
      placeholder={placeholder}
    />
  </div>
);

export default UserDetailInput;
