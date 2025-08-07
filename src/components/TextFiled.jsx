export default function TextField({
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  touched,
  type = "text", 
  options = [], 
}) {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>

      {type === "select" ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`w-full border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 ${
            error && touched
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-indigo-300"
          }`}
        >
          <option value="">-- Select --</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          rows={4}
          className={`w-full border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 ${
            error && touched
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-indigo-300"
          }`}
        />
      ) : (
        <input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`w-full border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 ${
            error && touched
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-indigo-300"
          }`}
        />
      )}

      {error && touched && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
