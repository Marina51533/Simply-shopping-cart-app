import { useEffect, useState } from "react";

export function useLocalStorage<T>(key:string,initialValue:T|(()=>T)){
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);
    // its like else if
    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]); // it runs every single time when key or value changes

  return [value,setValue] as [typeof value,typeof setValue]
}