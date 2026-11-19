export const injectString = (
  originalStr: string,
  from: number,
  injectedStr: string,
): string => {
  const to = from + injectedStr.length;

  const before = originalStr.slice(0, from);
  const after = originalStr.slice(to);

  return `${before}${injectedStr}${after}`;
};

export const randomASCII = (): string => {
  const charCode = Math.floor(Math.random() * 256);
  return String.fromCharCode(charCode);
};
