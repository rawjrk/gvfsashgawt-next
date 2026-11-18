/** @type {import("lint-staged").Configuration} */
const config = {
  "*.{js,jsx,mjs,cjs,ts,tsx,css,json,md,yml,yaml}": "prettier --write",
  "*.{js,jsx,mjs,cjs,ts,tsx}": "eslint --fix",
  "*.{ts,tsx}": () => "tsc --noEmit",
};

export default config;
