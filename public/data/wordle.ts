const FIVE_LETTER_WORDS: string[] = [
  "APPLE",
  "BRAVE",
  "CARET",
  "DANCE",
  "EAGER",
  "FAITH",
  "GRACE",
  "HAPPY",
  "IDEAL",
  "JOKER",
  "KNIFE",
  "LIGHT",
  "MIGHT",
  "NOBLE",
  "OCEAN",
  "PRIDE",
  "QUICK",
  "RIVER",
  "SHINE",
  "TRUST",
  "UNITY",
  "VIVID",
  "WORTH",
  "YOUTH",
  "ZEBRA",
  "ABIDE",
  "BRAVE",
  "CARET",
  "DANCE",
  "EAGER",
  "FAITH",
  "GRACE",
  "HAPPY",
  "IDEAL",
  "JOKER",
  "KNIFE",
  "LIGHT",
  "MIGHT",
  "NOBLE",
  "OCEAN",
  "PRIDE",
  "QUICK",
  "RIVER",
  "SHINE",
  "TRUST",
];

const ALPHABET: string[] = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  // "",
];

const getRandomWord = (): string => {
  const randomIndex = Math.floor(Math.random() * FIVE_LETTER_WORDS.length);
  return FIVE_LETTER_WORDS[randomIndex];
};

const getCellColor = (
  col: number,
  letter: string,
  randomWord: string
): string => {
  if (!randomWord || letter === "") return "bg-background";
  if (letter === randomWord[col]) return "bg-green-500 text-white";
  if (randomWord.includes(letter)) return "bg-yellow-500 text-white";
  return "bg-gray-500 text-white";
};

export { ALPHABET, getRandomWord, getCellColor };
