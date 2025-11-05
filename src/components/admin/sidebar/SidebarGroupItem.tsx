"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { SidebarItemProps } from "./SidebarItem";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export interface SidebarGroupItemProps {
  title: string;
  icon: LucideIcon;
  isActive?: boolean;
  items: SidebarItemProps[];
}

export default function DashSidebarGroup({
  item,
}: {
  item: SidebarGroupItemProps;
}) {
  const pathname = usePathname();

  return (
    <Collapsible
      key={item.title}
      asChild
      defaultOpen={item.isActive}
      className="group/collapsible"
    >
      <SidebarMenuItem className="group-data-[state=open]/collapsible:w-full">
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            tooltip={<GroupTooltip title={item.title} items={item.items} />}
            className={clsx(
              "min-w-9 min-h-9 group-data-[state=open]/collapsible:bg-sidebar-borded h-10 hover:bg-sidebar-borded",
              item.items.some((subItem) => pathname === subItem.url) &&
                "group-data-[collapsible=icon]:border-2 group-data-[collapsible=icon]:border-teal-500 group-data-[collapsible=icon]:dark:border-teal-700 group-data-[collapsible=icon]:bg-sidebar-borded"
            )}
          >
            <item.icon
              className={clsx(
                "scale-125",
                item.items.some((subItem) => pathname === subItem.url) &&
                  "pr-0.5 rtl:pr-0 rtl:pl-0.5 scale-[1.4]"
              )}
            />
            <span>{item.title}</span>
            <ChevronRight className="ml-auto rtl:ml-0 rtl:mr-auto transition-transform duration-100 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub className="mr-0">
            {item.items.map((subItem) => (
              <SidebarMenuSubItem key={subItem.title}>
                <SidebarMenuSubButton
                  asChild
                  className={clsx(
                    "h-10 hover:bg-sidebar-borded",
                    pathname === subItem.url &&
                      "border-2 border-teal-500 dark:border-teal-700"
                  )}
                  isActive={pathname === subItem.url}
                >
                  <Link href={subItem.url}>
                    <subItem.icon />
                    <span>{subItem.title}</span>
                    {subItem.beta && (
                      <span className="ml-auto rtl:ml-0 rtl:mr-auto px-1.5 py-0.5 text-xs font-medium rounded border bg-orange-500/20 border-orange-500 text-orange-500">
                        BETA
                      </span>
                    )}
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}

function GroupTooltip({
  title,
  items,
}: {
  title: string;
  items: SidebarItemProps[];
}) {
  const pathname = usePathname();

  return (
    <SidebarMenu className="-mx-[5px] w-[calc(100%+10px)]">
      <div className="h-7 px-1 flex gap-1 justify-center items-center text-center text-[0.85rem] font-semibold">
        {title}
      </div>
      {items.map((subItem) => (
        <SidebarMenuButton
          key={subItem.title}
          asChild
          className={clsx(
            "-mx-0.5 rounded-sm w-[calc(100%+4px)] text-md hover:bg-sidebar-borded",
            pathname === subItem.url &&
              "border-2 border-teal-500 dark:border-teal-700"
          )}
          isActive={pathname === subItem.url}
        >
          <Link href={subItem.url}>
            <subItem.icon className="h-6 w-6" />
            <span>{subItem.title}</span>
            {subItem.beta && (
              <span className="ml-auto rtl:ml-0 rtl:mr-auto px-1.5 py-0.5 text-xs font-medium rounded border bg-orange-500/20 border-orange-500 text-orange-500">
                BETA
              </span>
            )}
          </Link>
        </SidebarMenuButton>
      ))}
    </SidebarMenu>
  );
}
