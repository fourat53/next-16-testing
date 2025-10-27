import { Modal, ModalContent, ModalTitle } from "@/components/ui/modal";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { GridCell } from "@/app/wordle/page";
import { getRandomWord } from "@/public/data/wordle";
import { useEffect } from "react";

export default function WordleEndModal({
  randomWord,
  setRandomWord,
  gridValues,
  setGridValues,
  setCurrentGridCell,
}: {
  randomWord: string;
  setRandomWord: (word: string) => void;
  gridValues: string[][];
  setGridValues: (grid: string[][]) => void;
  setCurrentGridCell: (cell: GridCell) => void;
}) {
  const winCondition = gridValues.some((row) => row.join("") === randomWord);
  const loseCondition = gridValues[9].every((val) => val !== "");

  async function resetGame() {
    setGridValues(Array(10).fill(Array(5).fill("")));
    setCurrentGridCell({ row: 0, col: 0 });
    setRandomWord(await getRandomWord());
  }

  return (
    <Modal open={randomWord !== "" && (winCondition || loseCondition)}>
      <ModalContent showCloseButton={false} className="md:max-w-md space-y-3">
        <ModalTitle
          className={cn(winCondition ? "text-green-600" : "text-red-600")}
        >
          {winCondition ? `${randomWord} for the win!` : "You lose, loser!"}
        </ModalTitle>
        <Button
          color={cn(winCondition ? "bg-green-600" : "bg-red-600")}
          onClick={resetGame}
        >
          Play again
        </Button>
      </ModalContent>
    </Modal>
  );
}
