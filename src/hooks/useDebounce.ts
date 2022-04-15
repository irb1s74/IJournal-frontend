import { useCallback, useRef } from 'react';

export const useDebounce = (callback: (...arg: any) => void, delay: number) => {
  const timer = useRef<null | NodeJS.Timeout>(null);

  return useCallback(
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
};
