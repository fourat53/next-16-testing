"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ALPHABET, FIVE_LETTER_WORDS } from "@/public/data/wordle";
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
    const randomIndex = Math.floor(Math.random() * FIVE_LETTER_WORDS.length);
    setRandomWord(FIVE_LETTER_WORDS[randomIndex]);
  }, []);

  const aphabetButtonClick = (letter: string) => {
    if (
      !gridValues[currentGridCell.row] ||
      gridValues[currentGridCell.row][currentGridCell.col] !== ""
    )
      return;

    setGridValues((prev) => {
      const newGrid = prev.map((row) => row.slice());
      newGrid[currentGridCell.row][currentGridCell.col] = letter;
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
    <>
      <h1 className="text-2xl text-center font-bold mb-4 md:mb-6">
        Wordle Game {randomWord}
      </h1>
      <div className="w-full h-fit grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center">
        <div className="w-full md:col-span-2">
          {Array.from({ length: 10 }).map((_, rowIndex) => (
            <GridRow
              key={rowIndex}
              randomWord={randomWord}
              rowIndex={rowIndex}
              currentGridCell={currentGridCell}
              setCurrentGridCell={setCurrentGridCell}
              gridValues={gridValues}
            />
          ))}
        </div>
        <div className="h-fit w-full flex flex-wrap items-center justify-center gap-1">
          {ALPHABET.map((letter, index) => (
            <AlphabetButton
              key={index}
              letter={letter}
              onClick={() => aphabetButtonClick(letter)}
            />
          ))}
        </div>
      </div>
      <WordleEndModal
        randomWord={randomWord}
        gridValues={gridValues}
        setGridValues={setGridValues}
        setCurrentGridCell={setCurrentGridCell}
      />
    </>
  );
}

const GridRow = ({
  randomWord,
  rowIndex,
  currentGridCell,
  setCurrentGridCell,
  gridValues,
}: {
  randomWord: string;
  rowIndex: number;
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
    <div
      key={rowIndex}
      className="mx-auto w-fit grid grid-cols-5 gap-1 items-center justify-center"
    >
      {Array.from({ length: 5 }).map((_, colIndex) => (
        <Button
          key={colIndex}
          variant="ghost"
          disabled={
            rowIndex >= 1 && gridValues[rowIndex - 1].some((val) => val === "")
          }
          onClick={() => {
            setCurrentGridCell({ row: rowIndex, col: colIndex });
          }}
          className={cn(
            "size-10 md:size-14 border-2 border-gray-500 mt-1 flex items-center justify-center text-2xl font-bold rounded",
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
  );
};

const AlphabetButton = ({
  letter,
  onClick,
}: {
  letter: string;
  onClick: () => void;
}) => {
  return (
    <Button
      key={letter}
      variant="customColor"
      color="bg-gray-500"
      onClick={onClick}
      className={cn(
        "size-9 md:size-14 border-2 border-gray-500 text-xl md:text-3xl font-bold",
        letter === "" && "w-54"
      )}
    >
      {letter}
    </Button>
  );
};
