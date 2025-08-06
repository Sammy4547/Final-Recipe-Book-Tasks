import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage", error);
      return initialValue;
    }
  });

  const updateLocalStorage = (newData) => {
    try {
      localStorage.setItem(key, JSON.stringify(newData));
      setStoredValue(newData);
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
  };

  return [storedValue, updateLocalStorage];
}
