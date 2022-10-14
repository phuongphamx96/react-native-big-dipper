export const noop = () => {
  return null;
};

export const wait = (ms: number) => {
  return new Promise((resolve) => {
    return setTimeout(resolve, ms);
  });
};
