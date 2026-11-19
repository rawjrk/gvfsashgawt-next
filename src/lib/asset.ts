const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefixes a `public/` file path with the deployment basePath. */
export function asset(path: string) {
  return `${basePath}${path}`;
}

/** Absolute URL of a `public/` file on the current host (client-side only). */
export function assetUrl(path: string) {
  return `${window.location.origin}${asset(path)}`;
}
