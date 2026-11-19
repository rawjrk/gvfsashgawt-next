import {
  LOWERCASE_A,
  LOWERCASE_Z,
  UPPERCASE_A,
  UPPERCASE_Z,
} from "@/constants/ascii_codes";

import { randomChar, randomInteger } from "./rand";
import { isLowerCaseLetter, isUpperCaseLetter } from "./string";

const randomLower = () => randomChar(LOWERCASE_A, LOWERCASE_Z);
const randomUpper = () => randomChar(UPPERCASE_A, UPPERCASE_Z);

/**
 * Generates a random string of lowercase ASCII letters.
 *
 * Use it when there is no source text to imitate, e.g. as filler words for
 * {@link gibberishSentence}.
 *
 * @param length number of letters to generate
 * @returns random lowercase letters, `length` characters long
 * @example
 * gibberish(5); // e.g. "qhwzk"
 */
export const gibberish = (length: number): string => {
  let gib = "";

  for (let i = 0; i < length; i++) {
    gib += randomLower();
  }

  return gib;
};

/**
 * Scrambles a word while keeping its shape.
 *
 * Each ASCII letter is replaced with a random letter of the same case, and
 * every other character (digits, punctuation, spaces, non-ASCII) is kept
 * as is and in place. The result has the same length as the input, which
 * keeps hover effects (e.g. `GibWord`, `GibLink`, `GibVoid`) from shifting
 * the layout.
 *
 * @param str word to scramble
 * @returns scrambled word with the same length, letter case and non-letters
 * @example
 * gibberishWord("There's"); // e.g. "Kpqfm'x"
 * gibberishWord("J$Rk");    // e.g. "W$Fa"
 */
export const gibberishWord = (str: string): string => {
  let gib = "";

  for (let i = 0; i < str.length; i++) {
    if (isLowerCaseLetter(str, i)) {
      gib += randomLower();
      continue;
    }

    if (isUpperCaseLetter(str, i)) {
      gib += randomUpper();
      continue;
    }

    gib += str[i];
  }

  return gib;
};

/**
 * Generates a random, sentence-like line of {@link gibberish} words.
 *
 * Produces 3–9 lowercase words of 5–11 letters each, separated by spaces.
 * Each separator has a 1 in 10 chance of being a comma instead. There is no
 * capitalization or closing punctuation.
 *
 * Since the result is random, rendering it on the server and on the client
 * gives different text (see `GibText`, which suppresses the hydration warning).
 *
 * @returns random gibberish sentence
 * @example
 * gibberishSentence(); // e.g. "qhwzkep lmoatrv, ucnbxi"
 */
export const gibberishSentence = (): string => {
  const numberOfWords = randomInteger(3, 10);
  let sentence = "";

  for (let i = 0; i < numberOfWords; i++) {
    const wordLength = randomInteger(5, 12);
    sentence += gibberish(wordLength);

    const isLastWord = i === numberOfWords - 1;

    if (!isLastWord) {
      const addComma = randomInteger(0, 10) === 6;
      sentence += addComma ? ", " : " ";
    }
  }

  return sentence;
};
