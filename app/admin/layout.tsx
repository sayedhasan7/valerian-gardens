"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({ children }: any) {
  const router = useRouter();
  const pathname = usePathname();
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  // Inline isLoggedIn
  const isLoggedIn = () => {
    if (typeof window === "undefined") return false;
    return !!sessionStorage.getItem("token");
  };

  useEffect(() => {
    const loggedIn = isLoggedIn();

    if (!loggedIn) {
      router.replace("/admin/login");
      setLoading(false);
      return; // stop execution
    }

    setVerified(true);
    setLoading(false);
  }, [pathname]); // ONLY recheck on route change

  if (loading) return <div className="p-6">Checking authentication...</div>;

  return (
    <div className="flex h-screen bg-gray-50">
      {verified && isLoggedIn() && <AdminSidebar />}
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}
