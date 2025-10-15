// src/hooks/useLocalStorage.ts
// Simple, type-safe React hook to persist state to localStorage.
// Usage:
//   const [tasks, setTasks] = useLocalStorage<Task[]>("momentum_tasks_v1", []);
//
// Notes:
// - Values are JSON-serialized.
// - Automatically loads on first render and writes on every change.
// - Works with strings, numbers, booleans, arrays, and objects.

import * as React from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const readValue = React.useCallback((): T => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  }, [key, initialValue]);

  const [value, setValue] = React.useState<T>(readValue);

  // Keep multiple tabs in sync
  React.useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === key) {
        setValue(readValue());
      }
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, [key, readValue]);

  // Write to localStorage on change
  React.useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch {}
  }, [key, value]);

  return [value, setValue] as const;
}
