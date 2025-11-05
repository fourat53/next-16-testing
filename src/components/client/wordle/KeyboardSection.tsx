import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ALPHABET } from "@/public/data/wordle";

export default function KeyboardSection({
  onClick,
}: {
  onClick: (char: string) => void;
}) {
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
}
