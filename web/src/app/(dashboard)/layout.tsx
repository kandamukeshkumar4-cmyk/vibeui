import { Sidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen md:flex">
      <Sidebar />
      <main className="min-w-0 flex-1 p-4 md:p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Workspace</p>
            <h1 className="text-2xl font-semibold text-slate-950">VibeUI Dashboard</h1>
          </div>
          <div className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700 shadow-sm">Free</div>
        </div>
        {children}
      </main>
    </div>
  );
}

