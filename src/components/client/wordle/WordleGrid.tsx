import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type GridCell = {
  row: number;
  col: number;
};

export default function WordleGrid({
  randomWord,
  currentGridCell,
  setCurrentGridCell,
  gridValues,
}: {
  randomWord: string;
  currentGridCell: GridCell;
  setCurrentGridCell: (cell: GridCell) => void;
  gridValues: string[][];
}) {
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
}
