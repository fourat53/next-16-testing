"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import DashSidebarItem, { SidebarItemProps } from "./SidebarItem";
import DashSidebarGroupItem, {
  SidebarGroupItemProps,
} from "./SidebarGroupItem";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ScanIcon,
  Figma,
  BrainCog,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const items: SidebarItemProps[] = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    url: "/admin/dashboard",
    alert: false,
  },
];

const groupItems: SidebarGroupItemProps[] = [
  {
    icon: ScanIcon,
    title: "Services",
    items: [
      {
        icon: Figma,
        title: "Frontend",
        url: "/admin/services/frontend",
        alert: true,
      },
      {
        icon: BrainCog,
        title: "Backend",
        url: "/admin/services/backend",
        alert: true,
      },
    ],
  },
];

export default function AdminSidebar() {
  const { open } = useSidebar();

  const Signout = () => {};

  return (
    <Sidebar collapsible="icon" className="relative top-0 bottom-0 h-dvh">
      <SidebarHeader className={clsx("p-2 shrink-0", !open && "h-[84px]")}>
        <div
          className={clsx(
            "w-full flex items-center",
            open ? "justify-between" : "flex-col"
          )}
        >
          <Link href="/" className="flex items-center gap-1">
            <div className="rounded-lg size-9 border-2 border-primary"></div>
            <h1
              className={clsx(
                "whitespace-nowrap overflow-hidden transition-all duration-150 text-xl font-semibold",
                open ? "w-[115px]" : "w-0"
              )}
            >
              Logo
            </h1>
          </Link>
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className={clsx(!open && "px-1.5")}>
          <SidebarMenu>
            {items.slice(0, 5).map((item, index) => (
              <DashSidebarItem key={index} item={item} />
            ))}
            {groupItems.map((item, index) => (
              <DashSidebarGroupItem key={index} item={item} />
            ))}
            {items.slice(5, 6).map((item, index) => (
              <DashSidebarItem key={index} item={item} />
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter
        className={clsx(
          "w-full border-t border-input p-2",
          !open && "h-24 pt-0.5"
        )}
      >
        <div
          className={clsx(
            "w-full flex items-center gap-x-1",
            open ? "max-sm:max-w-full" : "flex-col gap-0.5 mt-0.5"
          )}
        >
          <Button
            onClick={Signout}
            variant="outline"
            className="p-0 min-w-10 min-h-10 rounded-lg text-neutral-900 dark:text-neutral-500 hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-all duration-300"
          >
            <LogOut className="text-red-600 cursor-pointer transition-colors duration-150 scale-115" />
          </Button>
          <div
            className={clsx(
              "px-1 flex flex-col justify-center items-center transition-all whitespace-nowrap overflow-hidden duration-150 ease-in-out",
              !open && "w-0 h-0"
            )}
          ></div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
