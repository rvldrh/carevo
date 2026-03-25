"use client";

import { useEffect } from "react";

export function useDebounceSave<T>(
  data: T,
  callback: (data: T) => void,
  delay = 1000
) {
  useEffect(() => {
    if (!data) return;

    const handler = setTimeout(() => {
      callback(data);
    }, delay);

    return () => clearTimeout(handler);
  }, [data, callback, delay]);
}