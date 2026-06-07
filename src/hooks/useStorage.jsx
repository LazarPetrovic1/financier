import { useCallback, useEffect, useState } from "react";

export function useLocalStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.localStorage);
}

export function useSessionStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.sessionStorage);
}

function useStorage(key, defaultValue, storageObject) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue == null) return typeof defaultValue === "function" ? defaultValue() : defaultValue;
    try {
      const parsed = JSON.parse(jsonValue);
      if (Array.isArray(parsed))
        return parsed.map(v => ({ ...v, start: v.start ? new Date(v.start) : null, end: v.end ? new Date(v.end) : null }));
      return parsed;
    } catch {
      return typeof defaultValue === "function" ? defaultValue() : defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) { storageObject.removeItem(key); return; }
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => setValue(undefined), []);
  return [value, setValue, remove];
}