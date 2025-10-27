import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Navbar } from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Next 16",
  description: "Next 16 App Example",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>
          <Navbar />
          <div className="min-h-screen p-8 pt-24">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
