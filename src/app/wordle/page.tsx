"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import {
  ALPHABET,
  getCellColor,
  getRandomWord,
} from "../../../public/data/wordle";
import WordleEndModal from "@/components/modals/WordleEndModal";

export default function wordle() {
  const [randomWord, setRandomWord] = useState<string | null>(null);
  const [gridValues, setGridValues] = useState<string[][]>(
    Array(10).fill(Array(5).fill(""))
  );
  const [currentGridCell, setCurrentGridCell] = useState<{
    row: number;
    col: number;
  }>({ row: 0, col: 0 });

  useEffect(() => {
    setRandomWord(getRandomWord());
  }, []);

  return (
    <>
      <h1 className="text-2xl text-center font-bold mb-4 md:mb-6">
        Wordle Game
      </h1>
      <div className="w-full h-fit grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center">
        <div className="w-full md:col-span-2">
          {Array.from({ length: 10 }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="mx-auto w-fit grid grid-cols-5 gap-1 items-center justify-center"
            >
              {Array.from({ length: 5 }).map((_, colIndex) => (
                <Button
                  variant="ghost"
                  key={colIndex}
                  className={cn(
                    "size-10 md:size-14 border-2 border-gray-500 mt-1 flex items-center justify-center text-2xl font-bold rounded",
                    currentGridCell.row === rowIndex &&
                      currentGridCell.col === colIndex &&
                      !gridValues[rowIndex][colIndex] &&
                      "animate-pulse duration-500 border-blue-500",
                    getCellColor(
                      colIndex,
                      gridValues[rowIndex][colIndex],
                      randomWord || ""
                    )
                  )}
                  disabled={
                    rowIndex >= 1 &&
                    gridValues[rowIndex - 1].some((val) => val === "")
                  }
                  onClick={() => {
                    setCurrentGridCell({ row: rowIndex, col: colIndex });
                  }}
                >
                  {gridValues[rowIndex][colIndex]}
                </Button>
              ))}
            </div>
          ))}
        </div>
        <div className="h-fit w-full flex flex-wrap items-center justify-center gap-1">
          {ALPHABET.map((letter) => (
            <Button
              key={letter}
              variant="customColor"
              color="bg-gray-500"
              className={cn(
                "size-9 md:size-14 border-2 border-gray-500 text-xl md:text-3xl font-bold",
                letter === "" && "w-54"
              )}
              onClick={() => {
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
              }}
            >
              {letter}
            </Button>
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
