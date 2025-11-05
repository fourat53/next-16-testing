import clsx from "clsx";
import AdminSidebar from "@/components/admin/sidebar/AdminSidebar";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import AdminSidebarProvider from "@/components/admin/sidebar/AdminSidebarProvider";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AdminSidebarProvider>
      <AdminSidebar />
      <SidebarTrigger className="max-md:fixed top-3 sm:top-4 left-4 sm:left-8 z-50 md:hidden" />
      <SidebarInset
        className={clsx(
          "min-h-screen text-neutral-700 dark:text-neutral-200 py-4 sm:py-6 px-4 sm:px-8 md:px-10 lg:px-[52px] w-full"
        )}
      >
        {children}
      </SidebarInset>
    </AdminSidebarProvider>
  );
}
