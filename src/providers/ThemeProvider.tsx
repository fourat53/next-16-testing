"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

export type ThemesType = { label: string; mode: string; icon: React.ReactNode };

export const themes: ThemesType[] = [
  { label: "Light", mode: "light", icon: <Sun /> },
  { label: "Dark", mode: "dark", icon: <Moon /> },
  { label: "System", mode: "system", icon: <Monitor /> },
];

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
