/**
 * @param from inclusive boundary
 * @param upto exclusive boundary
 */
export const randomInteger = (from: number, upto: number) => {
  const range = upto - from;
  return Math.floor(Math.random() * range) + from;
};

/**
 * @param fromChar inclusive boundary
 * @param toChar inclusive boundary
 */
export const randomChar = (fromChar: number, toChar: number): string => {
  const charCode = randomInteger(fromChar, toChar + 1);
  return String.fromCharCode(charCode);
};
