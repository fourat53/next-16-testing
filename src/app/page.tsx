"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  return (
    <div className="min-h-screen gap-2 flex items-center justify-center">
      <Button
        onClick={() => router.push("/admin/dashboard")}
        className="rounded-full"
      >
        Admin
      </Button>
      <Button
        onClick={() => router.push("/client/home")}
        className="rounded-full"
      >
        Client
      </Button>
      <Button onClick={() => router.push("/login")} className="rounded-full">
        Login
      </Button>
      <Button onClick={() => router.push("/register")} className="rounded-full">
        Register
      </Button>
    </div>
  );
}
