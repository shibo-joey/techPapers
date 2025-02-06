import { useCallback, useRef, useEffect } from "react";

export function useTimeout(callback, delay) {
  const timeoutRef = useRef();
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const clear = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const reset = useCallback(() => {
    clear();
    if (delay !== null) {
      timeoutRef.current = setTimeout(() => savedCallback.current(), delay);
    }
  }, [clear, delay]);

  useEffect(() => {
    if (delay !== null) {
      reset();
    }
    return clear;
  }, [delay]);

  return { reset, clear };
}
