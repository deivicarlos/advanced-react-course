function debounce<T extends unknown[]>(fn: (...args: T) => void, wait: number) {
  let timeoutId: number | null = null;

  return (...args: T) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      timeoutId = null;
      fn(...args);
    }, wait);
  };
}

export { debounce };
