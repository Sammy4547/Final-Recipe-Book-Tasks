import React from "react";

export default function TextField({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  placeholder = "",
  error = "",
  touched = false,
  textarea = false,
  ...rest
}) {
  const baseStyle = `w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
    error && touched ? "border-red-500" : "border-gray-300"
  }`;

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block mb-1 text-gray-700 font-medium">
          {label}
        </label>
      )}
      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          rows="3"
          className={`${baseStyle} resize-none`}
          {...rest}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={baseStyle}
          {...rest}
        />
      )}
      {error && touched && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
}
