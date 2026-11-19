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
