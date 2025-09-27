// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const throttle = (func: (...args: any[]) => void, limit: number) => {
  let lastCall = 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (this: any, ...args: any[]) {
    const now = performance.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
};
