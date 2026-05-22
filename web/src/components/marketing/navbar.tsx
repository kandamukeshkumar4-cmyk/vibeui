import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-slate-950">VibeUI</Link>
        <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <a href="#features">Features</a>
          <a href="#demo">Demo</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div className="flex items-center gap-2">
          <Link className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700" href="/login">Login</Link>
          <Link className="rounded-lg bg-slate-950 px-3 py-2 text-sm font-semibold text-white" href="/signup">Sign up</Link>
        </div>
      </nav>
    </header>
  );
}

