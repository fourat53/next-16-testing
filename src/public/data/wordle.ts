const ALPHABET = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);

async function getRandomWord(): Promise<string> {
  const res = await fetch("https://api.datamuse.com/words?sp=?????&max=100");
  const data = await res.json();
  const words = data.map((obj: { word: string }) => obj.word.toUpperCase());

  return words[Math.floor(Math.random() * words.length)];
}
export { ALPHABET, getRandomWord };
