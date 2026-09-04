function throttle<T extends unknown[]>(fn: (...args: T) => void, wait: number) {
  let isCooldown = false;
  let stashedArgs: T | null = null;

  const invoke = (args: T) => {
    fn(...args);
    isCooldown = true;

    setTimeout(() => {
      isCooldown = false;
      if (stashedArgs !== null) {
        const next = stashedArgs;
        stashedArgs = null;
        invoke(next);
      }
    }, wait);
  };

  return (...args: T) => {
    if (!isCooldown) {
      invoke(args);
    } else {
      stashedArgs = args;
    }
  };
}

export { throttle };
