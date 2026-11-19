import {
  LOWERCASE_A,
  LOWERCASE_Z,
  UPPERCASE_A,
  UPPERCASE_Z,
} from "@/constants/ascii_codes";

export const isUpperCaseLetter = (str: string, pos = 0) => {
  const code = str.charCodeAt(pos);
  return code >= UPPERCASE_A && code <= UPPERCASE_Z;
};

export const isLowerCaseLetter = (str: string, pos = 0) => {
  const code = str.charCodeAt(pos);
  return code >= LOWERCASE_A && code <= LOWERCASE_Z;
};
