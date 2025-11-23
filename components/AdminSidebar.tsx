"use client";
import Link from "next/link";
import { LayoutDashboard, MessageSquare, Images, LogOut, Mail } from "lucide-react";
import { logout } from "@/lib/auth";
import { useRouter } from "next/navigation";

const nav = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Reviews", href: "/admin/reviews", icon: MessageSquare },
  { name: "Portfolio", href: "/admin/portfolio", icon: Images },
  { name: "Contact", href: "/admin/contact", icon: Mail },
];

export default function AdminSidebar() {
  const router = useRouter();

  return (
    <aside className="w-64 bg-white shadow-lg p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>

      <nav className="flex-1">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100"
          >
            <item.icon className="size-5" />
            {item.name}
          </Link>
        ))}
      </nav>

      <button
        onClick={() => {
          logout();
          router.push("/admin/login");
        }}
        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 text-red-500"
      >
        <LogOut className="size-5" /> Logout
      </button>
    </aside>
  );
}
