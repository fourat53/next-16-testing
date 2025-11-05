"use client";

import { useEffect, useState } from "react";
import { ALPHABET, getRandomWord } from "@/public/data/wordle";
import WordleEndModal from "@/components/client/wordle/WordleEndModal";
import KeyboardSection from "@/components/client/wordle/KeyboardSection";
import WordleGrid, { GridCell } from "@/components/client/wordle/WordleGrid";

export default function wordle() {
  const [randomWord, setRandomWord] = useState<string>("");
  const [gridValues, setGridValues] = useState<string[][]>(
    Array(10).fill(Array(5).fill(""))
  );
  const [currentGridCell, setCurrentGridCell] = useState<GridCell>({
    row: 0,
    col: 0,
  });

  useEffect(() => {
    async function initializeWord() {
      setRandomWord(await getRandomWord());
    }
    initializeWord();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      if (ALPHABET.includes(key)) {
        e.preventDefault();
        aphabetButtonClick(key);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [gridValues]);

  const aphabetButtonClick = (char: string) => {
    if (
      !gridValues[currentGridCell.row] ||
      gridValues[currentGridCell.row][currentGridCell.col] !== ""
    )
      return;

    setGridValues((prev) => {
      const newGrid = prev.map((row) => row.slice());
      newGrid[currentGridCell.row][currentGridCell.col] = char;
      return newGrid;
    });
    setCurrentGridCell((prev) => {
      let { row, col } = prev;
      if (col < 4) {
        col += 1;
      } else if (col === 4 && row < 9) {
        row += 1;
        col = 0;
      }
      return { row, col };
    });
  };

  return (
    <div className="w-full min-h-[calc(100vh-128px)] grid grid-cols-1 md:grid-cols-5 max-md:gap-4 items-center justify-center">
      <div className="md:col-span-3 w-full h-full flex items-center justify-center">
        <WordleGrid
          randomWord={randomWord}
          gridValues={gridValues}
          currentGridCell={currentGridCell}
          setCurrentGridCell={setCurrentGridCell}
        />
      </div>
      <div className="md:col-span-2 w-full h-full flex items-center justify-center">
        <KeyboardSection onClick={aphabetButtonClick} />
      </div>
      <WordleEndModal
        randomWord={randomWord}
        setRandomWord={setRandomWord}
        gridValues={gridValues}
        setGridValues={setGridValues}
        setCurrentGridCell={setCurrentGridCell}
      />
    </div>
  );
}
