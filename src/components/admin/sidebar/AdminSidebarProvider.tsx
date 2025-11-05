"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";

function getDefaultOpen(): boolean {
  if (typeof window === "undefined") return true;
  const stored = localStorage.getItem("defaultOpen");
  if (stored === "true" || stored === "false") return stored === "true";
  localStorage.setItem("defaultOpen", "true");
  return true;
}

export default function AdminSidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState<boolean>(getDefaultOpen);

  useEffect(() => {
    localStorage.setItem("defaultOpen", open.toString());
  }, [open]);

  return (
    <SidebarProvider defaultOpen={open} open={open} onOpenChange={setOpen}>
      {children}
    </SidebarProvider>
  );
}
