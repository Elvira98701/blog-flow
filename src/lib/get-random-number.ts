export const getRandomNumber = (start: number, end: number) => {
  if (start >= end) return null;
  return Math.floor(Math.random() * (end - start + 1)) + 1;
};
