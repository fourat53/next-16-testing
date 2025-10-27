"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ALPHABET, getRandomWord } from "@/public/data/wordle";
import WordleEndModal from "@/components/modals/WordleEndModal";

export type GridCell = {
  row: number;
  col: number;
};

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
        <Grid
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

const Grid = ({
  randomWord,
  currentGridCell,
  setCurrentGridCell,
  gridValues,
}: {
  randomWord: string;
  currentGridCell: GridCell;
  setCurrentGridCell: (cell: GridCell) => void;
  gridValues: string[][];
}) => {
  const getCellColor = ({
    letter,
    col,
  }: {
    letter: string;
    col: number;
  }): string => {
    if (!randomWord || letter === "") return "bg-background";
    if (randomWord.includes(letter) && letter !== randomWord[col])
      return "bg-yellow-500 text-white";
    if (letter === randomWord[col]) return "bg-green-500 text-white";
    return "bg-gray-500 text-white";
  };

  return (
    <div className="space-y-1">
      {Array.from({ length: 10 }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="space-x-1 grid grid-cols-5 items-center justify-center"
        >
          {Array.from({ length: 5 }).map((_, colIndex) => (
            <Button
              key={colIndex}
              variant="ghost"
              disabled={
                rowIndex >= 1 &&
                gridValues[rowIndex - 1].some((val) => val === "")
              }
              onClick={() => {
                setCurrentGridCell({ row: rowIndex, col: colIndex });
              }}
              className={cn(
                "size-10 md:size-16 border-2 border-gray-500 flex items-center justify-center text-2xl font-bold rounded",
                currentGridCell.row === rowIndex &&
                  currentGridCell.col === colIndex &&
                  !gridValues[rowIndex][colIndex] &&
                  "animate-pulse duration-500 border-blue-500",
                getCellColor({
                  letter: gridValues[rowIndex][colIndex],
                  col: colIndex,
                })
              )}
            >
              {gridValues[rowIndex][colIndex]}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};

const KeyboardSection = ({ onClick }: { onClick: (char: string) => void }) => {
  return (
    <div className="flex flex-wrap gap-1 md:gap-2 items-center justify-center">
      {ALPHABET.map((letter, index) => (
        <Button
          key={index}
          color="bg-gray-500"
          onClick={() => onClick(letter)}
          className={cn(
            "size-9 md:size-14 border-2 border-gray-500 text-xl md:text-3xl font-bold",
            letter === "" && "w-54"
          )}
        >
          {letter}
        </Button>
      ))}
    </div>
  );
};
