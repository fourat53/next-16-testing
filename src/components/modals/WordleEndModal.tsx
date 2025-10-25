import { Modal, ModalContent, ModalTitle } from "@/components/ui/modal";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function WordleEndModal({
  randomWord,
  gridValues,
  setGridValues,
  setCurrentGridCell,
}: {
  randomWord: string | null;
  gridValues: string[][];
  setGridValues: any;
  setCurrentGridCell: any;
}) {
  const winCondition = gridValues.some((row) => row.join("") === randomWord);
  const loseCondition = gridValues[9].every((val) => val !== "");

  return (
    <Modal open={winCondition || loseCondition}>
      <ModalContent showCloseButton={false} className="md:max-w-md">
        <ModalTitle
          className={cn(winCondition ? "text-green-600" : "text-red-600")}
        >
          {winCondition ? `${randomWord} for the win!` : "You lose, loser!"}
        </ModalTitle>
        <Button
          variant="customColor"
          color={cn(winCondition ? "bg-green-600" : "bg-red-600")}
          className="mt-3 "
          onClick={() => {
            setCurrentGridCell({ row: 0, col: 0 });
            setGridValues(Array(10).fill(Array(5).fill("")));
          }}
        >
          Play again
        </Button>
      </ModalContent>
    </Modal>
  );
}
