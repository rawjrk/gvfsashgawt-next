import { randomInteger } from "./rand";

const UPPERCASE_A = 0x41;
const UPPERCASE_Z = 0x5a;
const LOWERCASE_A = 0x61;
const LOWERCASE_Z = 0x7a;

const randomChar = (fromChar: number, toChar: number): string => {
  const charCode = randomInteger(fromChar, toChar);
  return String.fromCharCode(charCode);
};

export const gibberishWord = (length: number, uppercase?: boolean): string => {
  let gib = "";

  for (let i = 0; i < length; i++) {
    gib += randomChar(
      uppercase ? UPPERCASE_A : LOWERCASE_A,
      uppercase ? UPPERCASE_Z : LOWERCASE_Z,
    );
  }

  return gib;
};

export const gibberishSentence = (): string => {
  const numberOfWords = randomInteger(3, 10);
  let sentence = "";

  for (let i = 0; i < numberOfWords; i++) {
    const wordLength = randomInteger(5, 12);
    sentence += gibberishWord(wordLength);

    const isLastWord = i === numberOfWords - 1;

    if (!isLastWord) {
      const addComma = randomInteger(0, 10) === 6;
      sentence += addComma ? ", " : " ";
    }
  }

  return sentence;
};
