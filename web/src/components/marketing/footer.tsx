import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10" style={{ background: "rgba(2,8,23,0.8)" }}>
      {/* Giant faded watermark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        aria-hidden="true"
      >
        <span
          className="text-[clamp(5rem,18vw,14rem)] font-black tracking-tighter text-white/[0.025]"
          style={{ lineHeight: 1 }}
        >
          VibeUI
        </span>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Brand + copyright */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L14.5 5.5V12.5L9 16L3.5 12.5V5.5L9 2Z" fill="white" fillOpacity="0.9" />
                  <path d="M9 6L11.5 7.5V10.5L9 12L6.5 10.5V7.5L9 6Z" fill="white" />
                </svg>
              </div>
              <span className="text-base font-bold text-white">VibeUI</span>
            </Link>
            <p className="mt-6 text-sm text-slate-500">
              &copy; 2026 VibeUI. All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div>
            <p className="mb-4 text-sm font-semibold text-slate-200">Company</p>
            <ul className="space-y-3">
              {[
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
              ].map(({ label, href }) => (
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

          {/* Legal */}
          <div>
            <p className="mb-4 text-sm font-semibold text-slate-200">Legal</p>
            <ul className="space-y-3">
              {[
                { label: "Terms of Service", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Delete Account", href: "/delete-account" },
              ].map(({ label, href }) => (
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
        </div>
      </div>
    </footer>
  );
}
