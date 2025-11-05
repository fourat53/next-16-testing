"use client";

import { type LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import clsx from "clsx";

export interface SidebarItemProps {
  icon: LucideIcon;
  title: string;
  url: string;
  alert: boolean;
  beta?: boolean;
}

export default function DashSidebarItem({ item }: { item: SidebarItemProps }) {
  const pathname = usePathname();

  return (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton
        asChild
        className={clsx(
          "hover:bg-sidebar-borded min-w-9 min-h-9",
          pathname === item.url &&
            "border-2 border-teal-500 dark:border-teal-700"
        )}
        tooltip={item.title}
        isActive={pathname === item.url}
      >
        <Link href={item.url} className="relative">
          <item.icon
            className={clsx(
              "scale-125",
              pathname === item.url && "pr-0.5  rtl:pr-0 rtl:pl-0.5 scale-[1.4]"
            )}
          />
          <span>{item.title}</span>
          {item.beta && (
            <span className="ml-auto rtl:ml-0 rtl:mr-auto px-1.5 py-0.5 text-xs font-medium rounded border bg-orange-500/20 border-orange-500 text-orange-500">
              BETA
            </span>
          )}
          <SidebarMenuBadge className="absolute -right-2" />
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
