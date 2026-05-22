"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Bot, History, KeyRound, LayoutDashboard, Play, Settings, SquareStack } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  ["/dashboard", "Dashboard", LayoutDashboard],
  ["/playground", "Playground", Play],
  ["/projects", "Projects", SquareStack],
  ["/api-keys", "API Keys", KeyRound],
  ["/history", "History", History],
  ["/agents", "Agents", Bot],
  ["/settings", "Settings", Settings],
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden h-screen w-72 border-r border-slate-200 bg-white p-4 md:sticky md:top-0 md:block">
      <Link href="/dashboard" className="text-xl font-bold text-slate-950">VibeUI</Link>
      <nav className="mt-8 space-y-1">
        {nav.map(([href, label, Icon]) => (
          <Link
            key={href as string}
            href={href as string}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100",
              pathname === href && "bg-slate-950 text-white hover:bg-slate-950"
            )}
          >
            <Icon className="h-4 w-4" />
            {label as string}
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-slate-50 p-4">
        <BarChart3 className="h-5 w-5 text-slate-900" />
        <p className="mt-2 text-sm font-semibold">Free plan</p>
        <p className="text-xs text-slate-500">10 generations/month</p>
      </div>
    </aside>
  );
}

