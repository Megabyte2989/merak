import React, { useState } from 'react';

function ContactUsInput({
	name,
	type = 'text',
	title,
	required = false,
	value = '',
	edit = true,
	placeholder,
	className,
	pattern,
	readOnly = false,
	inputMode,
}) {
	const [inputValue, setInputValue] = useState(value); // State for controlled input
	const [showError, setShowError] = useState(false);

	const handleBlur = e => {
		if (required && !e.target.value) {
			setShowError(true);
		} else {
			setShowError(false);
		}
	};

	const handleChange = e => {
		if (type === 'text' && inputMode === 'numeric') {
			// Filter out non-numeric characters
			setInputValue(e.target.value.replace(/[^0-9]/g, ''));
		} else {
			setInputValue(e.target.value);
		}
	};

	return (
		<div className="m-4">
			<label htmlFor={name} className="block text-sm font-medium mb-1">
				{title} {showError && <span className="text-red-500">*</span>}
			</label>
			{type === 'textarea' ? (
				<textarea
					id={name}
					name={name}
					placeholder={placeholder}
					value={inputValue}
					className={`w-full px-3 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring focus:ring-blue-300 bg-slate-100 ${className}`}
					required={required}
					onBlur={handleBlur}
					onChange={handleChange}
					onFocus={() => setShowError(false)}
				/>
			) : (
				<input
					id={name}
					name={name}
					type={type}
					inputMode={inputMode}
					pattern={pattern}
					contentEditable={edit}
					placeholder={placeholder}
					readOnly={readOnly}
					value={inputValue}
					className={`w-full px-3 flex-1 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring focus:ring-blue-300 bg-slate-100 ${className}`}
					required={required}
					onBlur={handleBlur}
					onChange={handleChange}
					onFocus={() => setShowError(false)}
				/>
			)}
			{showError && (
				<p className="text-red-500 text-xs mt-1">This field is required</p>
			)}
		</div>
	);
}

export default ContactUsInput;
