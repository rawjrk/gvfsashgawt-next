// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AsyncFn<F extends (...args: any[]) => any> =
  | F
  | ((...args: Parameters<F>) => Promise<ReturnType<F>>);
