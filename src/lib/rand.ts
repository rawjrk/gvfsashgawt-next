/**
 * @param from inclusive boundary
 * @param upto exclusive boundary
 */
export const randomInteger = (from: number, upto: number) => {
  const range = upto - from;
  return Math.floor(Math.random() * range) + from;
};
