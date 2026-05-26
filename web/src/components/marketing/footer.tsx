import Link from "next/link";

const links = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#demo" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "/changelog" },
  ],
  Developers: [
    { label: "API Docs", href: "/docs" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Status", href: "https://status.vibeui.com" },
    { label: "GitHub", href: "https://github.com" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "mailto:hello@vibeui.com" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Security", href: "/security" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/10" style={{ background: "rgba(2,8,23,0.6)" }}>
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-5">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L14.5 5.5V12.5L9 16L3.5 12.5V5.5L9 2Z" fill="white" fillOpacity="0.9" />
                  <path d="M9 6L11.5 7.5V10.5L9 12L6.5 10.5V7.5L9 6Z" fill="white" />
                </svg>
              </div>
              <span className="text-base font-bold text-white">VibeUI</span>
            </Link>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              AI-powered mobile UI generation. From prompt to pixel in seconds.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="mb-4 text-sm font-semibold text-slate-200">{category}</p>
              <ul className="space-y-3">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} VibeUI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-xs font-medium text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
