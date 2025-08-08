export default function Button({
  type = "button",
  onClick,
  children,
  className = "",
  variant = "primary",
}) {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-300 hover:bg-gray-400 text-black",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    safer: "bg-green-600 hover:bg-green-700 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
