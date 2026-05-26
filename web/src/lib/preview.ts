// Allow Google Fonts (style + font files) so Inter renders correctly in the preview.
// Scripts remain blocked; no external JS is ever loaded.
const CSP = [
  "default-src 'none'",
  "script-src 'none'",
  "style-src 'unsafe-inline' https://fonts.googleapis.com",
  "font-src https://fonts.gstatic.com",
  "img-src data: blob:",
  "connect-src 'none'",
  "frame-src 'none'",
  "form-action 'none'",
  "base-uri 'none'",
  "object-src 'none'",
].join("; ");

// Minimal reset + comprehensive utility layer so any residual class names still render.
const BASE_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
*,*::before,*::after{box-sizing:border-box}
html,body{margin:0;padding:0;width:100%;height:100%;overflow-x:hidden}
body{font-family:'Inter',system-ui,-apple-system,sans-serif;background:#fff;color:#111827;-webkit-font-smoothing:antialiased}
svg{display:inline-block;vertical-align:middle;flex-shrink:0}

/* ── Layout ── */
.flex{display:flex!important}.inline-flex{display:inline-flex!important}
.grid{display:grid!important}.block{display:block!important}.hidden{display:none!important}
.flex-col{flex-direction:column!important}.flex-row{flex-direction:row!important}
.flex-1{flex:1 1 0!important}.flex-shrink-0{flex-shrink:0!important}
.flex-wrap{flex-wrap:wrap!important}
.items-center{align-items:center!important}.items-start{align-items:flex-start!important}.items-end{align-items:flex-end!important}
.justify-center{justify-content:center!important}.justify-between{justify-content:space-between!important}
.justify-around{justify-content:space-around!important}.justify-end{justify-content:flex-end!important}
.self-center{align-self:center!important}.self-start{align-self:flex-start!important}
.gap-1{gap:.25rem!important}.gap-2{gap:.5rem!important}.gap-3{gap:.75rem!important}
.gap-4{gap:1rem!important}.gap-5{gap:1.25rem!important}.gap-6{gap:1.5rem!important}
.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))!important}
.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))!important}
.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))!important}
.col-span-2{grid-column:span 2!important}

/* ── Sizing ── */
.w-full{width:100%!important}.h-full{height:100%!important}
.min-h-screen{min-height:100vh!important}.h-screen{height:100vh!important}
.w-4{width:1rem!important}.h-4{height:1rem!important}
.w-6{width:1.5rem!important}.h-6{height:1.5rem!important}
.w-8{width:2rem!important}.h-8{height:2rem!important}
.w-10{width:2.5rem!important}.h-10{height:2.5rem!important}
.w-12{width:3rem!important}.h-12{height:3rem!important}
.w-16{width:4rem!important}.h-16{height:4rem!important}
.w-24{width:6rem!important}.h-24{height:6rem!important}
.max-w-full{max-width:100%!important}

/* ── Spacing ── */
.p-1{padding:.25rem!important}.p-2{padding:.5rem!important}.p-3{padding:.75rem!important}
.p-4{padding:1rem!important}.p-5{padding:1.25rem!important}.p-6{padding:1.5rem!important}
.px-2{padding-left:.5rem!important;padding-right:.5rem!important}
.px-3{padding-left:.75rem!important;padding-right:.75rem!important}
.px-4{padding-left:1rem!important;padding-right:1rem!important}
.px-5{padding-left:1.25rem!important;padding-right:1.25rem!important}
.py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}
.py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}
.py-3{padding-top:.75rem!important;padding-bottom:.75rem!important}
.py-4{padding-top:1rem!important;padding-bottom:1rem!important}
.pt-4{padding-top:1rem!important}.pb-4{padding-bottom:1rem!important}
.mb-1{margin-bottom:.25rem!important}.mb-2{margin-bottom:.5rem!important}
.mb-3{margin-bottom:.75rem!important}.mb-4{margin-bottom:1rem!important}
.mb-6{margin-bottom:1.5rem!important}.mt-1{margin-top:.25rem!important}
.mt-2{margin-top:.5rem!important}.mt-3{margin-top:.75rem!important}
.mt-4{margin-top:1rem!important}.mt-auto{margin-top:auto!important}
.mx-auto{margin-left:auto!important;margin-right:auto!important}
.ml-auto{margin-left:auto!important}.mr-2{margin-right:.5rem!important}

/* ── Typography ── */
.text-xs{font-size:.75rem!important;line-height:1rem!important}
.text-sm{font-size:.875rem!important;line-height:1.25rem!important}
.text-base{font-size:1rem!important;line-height:1.5rem!important}
.text-lg{font-size:1.125rem!important;line-height:1.75rem!important}
.text-xl{font-size:1.25rem!important;line-height:1.75rem!important}
.text-2xl{font-size:1.5rem!important;line-height:2rem!important}
.text-3xl{font-size:1.875rem!important;line-height:2.25rem!important}
.font-normal{font-weight:400!important}.font-medium{font-weight:500!important}
.font-semibold{font-weight:600!important}.font-bold{font-weight:700!important}
.font-extrabold{font-weight:800!important}
.text-center{text-align:center!important}.text-right{text-align:right!important}
.text-left{text-align:left!important}
.tracking-tight{letter-spacing:-.025em!important}
.tracking-wide{letter-spacing:.025em!important}
.uppercase{text-transform:uppercase!important}
.truncate{overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important}
.leading-tight{line-height:1.25!important}.leading-snug{line-height:1.375!important}
.line-clamp-2{display:-webkit-box!important;-webkit-line-clamp:2!important;-webkit-box-orient:vertical!important;overflow:hidden!important}

/* ── Colours ── */
.text-white{color:#fff!important}.text-black{color:#000!important}
.text-gray-400{color:#9ca3af!important}.text-gray-500{color:#6b7280!important}
.text-gray-600{color:#4b5563!important}.text-gray-700{color:#374151!important}
.text-gray-800{color:#1f2937!important}.text-gray-900{color:#111827!important}
.bg-white{background:#fff!important}.bg-black{background:#000!important}
.bg-gray-50{background:#f9fafb!important}.bg-gray-100{background:#f3f4f6!important}
.bg-gray-200{background:#e5e7eb!important}.bg-gray-800{background:#1f2937!important}
.bg-gray-900{background:#111827!important}
.bg-transparent{background:transparent!important}
.opacity-50{opacity:.5!important}.opacity-70{opacity:.7!important}

/* ── Borders & Radius ── */
.border{border:1px solid #e5e7eb!important}
.border-b{border-bottom:1px solid #e5e7eb!important}
.border-t{border-top:1px solid #e5e7eb!important}
.border-gray-100{border-color:#f3f4f6!important}
.border-gray-200{border-color:#e5e7eb!important}
.rounded{border-radius:.25rem!important}.rounded-md{border-radius:.375rem!important}
.rounded-lg{border-radius:.5rem!important}.rounded-xl{border-radius:.75rem!important}
.rounded-2xl{border-radius:1rem!important}.rounded-3xl{border-radius:1.5rem!important}
.rounded-full{border-radius:9999px!important}

/* ── Shadows ── */
.shadow-sm{box-shadow:0 1px 2px rgba(0,0,0,.06)!important}
.shadow{box-shadow:0 1px 3px rgba(0,0,0,.1),0 1px 2px rgba(0,0,0,.06)!important}
.shadow-md{box-shadow:0 4px 6px rgba(0,0,0,.07),0 2px 4px rgba(0,0,0,.06)!important}
.shadow-lg{box-shadow:0 10px 15px rgba(0,0,0,.1),0 4px 6px rgba(0,0,0,.05)!important}
.shadow-xl{box-shadow:0 20px 25px rgba(0,0,0,.1),0 10px 10px rgba(0,0,0,.04)!important}

/* ── Position & Overflow ── */
.relative{position:relative!important}.absolute{position:absolute!important}
.inset-0{top:0!important;right:0!important;bottom:0!important;left:0!important}
.overflow-hidden{overflow:hidden!important}.overflow-y-auto{overflow-y:auto!important}
.overflow-x-hidden{overflow-x:hidden!important}
.z-10{z-index:10!important}.z-20{z-index:20!important}

/* ── Misc ── */
.cursor-pointer{cursor:pointer!important}
.space-y-2>*+*{margin-top:.5rem!important}
.space-y-3>*+*{margin-top:.75rem!important}
.space-y-4>*+*{margin-top:1rem!important}
.divide-y>*+*{border-top:1px solid #e5e7eb!important}
`;

// The phone mockup iframe is ~256px wide (280px outer – 12px padding each side).
// We design at 390px (iPhone 14) in the prompt and scale down to fit the frame.
// 256 / 390 ≈ 0.656 — set as initial-scale so the browser handles the scaling.
export function buildPreviewSrcDoc(html: string) {
  return `<!doctype html><html><head><meta charset="utf-8" /><meta http-equiv="Content-Security-Policy" content="${CSP}" /><meta name="viewport" content="width=390,initial-scale=0.656,maximum-scale=0.656,user-scalable=no" /><style>${BASE_CSS}</style></head><body>${html}</body></html>`;
}

