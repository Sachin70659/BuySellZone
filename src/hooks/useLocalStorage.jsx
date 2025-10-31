import { useState, useEffect } from "react";

export const useLocalStorage=(key, initialValue, version = 1)=> {
  const [state, setState] = useState(() => {
    try {
      const storedVersion = localStorage.getItem(key + "_version");
      const raw = localStorage.getItem(key);

      // Agar version same hai → purana data use karo
      if (raw && storedVersion == version) {
        return JSON.parse(raw);
      }

      // Agar version change hua → naya data set karo
      localStorage.setItem(key, JSON.stringify(initialValue));
      localStorage.setItem(key + "_version", version);

      return initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
      localStorage.setItem(key + "_version", version);
    } catch {}
  }, [key, state, version]);

  return [state, setState];
}
