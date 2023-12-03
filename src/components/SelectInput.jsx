import React from "react";
import Select from "react-select";

const SelectInput = ({ label, value, onChange, options }) => (
	<div className="mb-4">
		<label htmlFor={label} className="block text-sm font-medium text-gray-700">
			{label}
		</label>
		<select
			name="status"
			id={label}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			className="p-2 border border-gray-300 rounded-md w-full"
		>
			{options.map((option) => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	</div>
);

export default SelectInput;
