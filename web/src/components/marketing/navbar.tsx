import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10" style={{ background: "rgba(2,8,23,0.8)", backdropFilter: "blur(16px)" }}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L14.5 5.5V12.5L9 16L3.5 12.5V5.5L9 2Z" fill="white" fillOpacity="0.9"/>
              <path d="M9 6L11.5 7.5V10.5L9 12L6.5 10.5V7.5L9 6Z" fill="white"/>
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight text-white">VibeUI</span>
        </Link>

        {/* Nav links */}
        <div className="hidden items-center gap-7 text-sm font-medium text-slate-400 md:flex">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#demo" className="hover:text-white transition-colors">Demo</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>

        {/* Auth buttons */}
        <div className="flex items-center gap-2">
          <Link href="/login" className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-300 hover:bg-white/10 transition-colors">
            Login
          </Link>
          <Link href="/signup" className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-500 transition-colors">
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
}
