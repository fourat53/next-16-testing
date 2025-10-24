import { themes, ThemesType } from "@/providers/ThemeProvider";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function ThemeSwitch({ labeled }: { labeled?: boolean }) {
  return (
    <div
      className={cn(
        "z-50 flex items-center gap-1 rounded-full border p-1",
        labeled && "w-full grid grid-cols-3 px-2"
      )}
    >
      {themes.map((t: ThemesType) => (
        <ThemeButton key={t.mode} t={t} labeled={labeled} />
      ))}
    </div>
  );
}

function ThemeButton({ t, labeled }: { t: ThemesType; labeled?: boolean }) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="secondary"
      className={cn(
        "rounded-full p-1 size-8",
        theme === t.mode && "bg-accent border-2",
        labeled && "w-full flex items-center gap-2"
      )}
      onClick={() => setTheme(t.mode)}
    >
      {t.icon} {labeled && <span>{t.label}</span>}
    </Button>
  );
}
