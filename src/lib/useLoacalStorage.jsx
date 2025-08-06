
import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(initialValue)
   localStorage.setItem(key,JSON.stringify(initialValue))

  const updateLocalStorage=(newData)=>{
   localStorage.setItem(key,JSON.stringify(newData))
   setStoredValue(newData) // its set the data in localStorage
  }

  return [storedValue, updateLocalStorage];
}
