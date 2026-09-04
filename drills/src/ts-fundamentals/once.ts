function once<T extends unknown[], R>(fn: (...args: T) => R) {
  let called = false;
  let result: R;

  return (...args: T): R => {
    if (called) {
      return result;
    }

    called = true;
    result = fn(...args);
    return result;
  };
}

export { once };
