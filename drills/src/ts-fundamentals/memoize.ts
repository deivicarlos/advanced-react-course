function memoize<T extends unknown[], R>(fn: (...args: T) => R) {
  const cache = new Map<string, R>();

  return (...args: T): R => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key) as R;
    }

    const value = fn(...args);
    cache.set(key, value);

    return value;
  };
}

export { memoize };
