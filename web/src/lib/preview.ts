const CSP = [
  "default-src 'none'",
  "script-src 'none'",
  "style-src 'unsafe-inline'",
  "img-src data: blob:",
  "connect-src 'none'",
  "font-src 'none'",
  "frame-src 'none'",
  "form-action 'none'",
  "base-uri 'none'",
  "object-src 'none'",
].join("; ");

export function buildPreviewSrcDoc(html: string) {
  return `<!doctype html><html><head><meta charset="utf-8" /><meta http-equiv="Content-Security-Policy" content="${CSP}" /><meta name="viewport" content="width=device-width, initial-scale=1" /><style>
    *,*::before,*::after{box-sizing:border-box} body{margin:0;font-family:Inter,system-ui,sans-serif;background:#fff;color:#111827}
    .min-h-screen{min-height:100vh}.bg-white{background:#fff}.bg-gray-50{background:#f9fafb}.bg-gray-100{background:#f3f4f6}.text-gray-900{color:#111827}.text-gray-500{color:#6b7280}.text-white{color:#fff}
    .flex{display:flex}.grid{display:grid}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.flex-col{flex-direction:column}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}
    .p-3{padding:.75rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.px-4{padding-left:1rem;padding-right:1rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}
    .rounded-xl{border-radius:.75rem}.rounded-2xl{border-radius:1rem}.rounded-3xl{border-radius:1.5rem}.shadow-sm{box-shadow:0 1px 2px rgba(15,23,42,.08)}.font-semibold{font-weight:600}.font-bold{font-weight:700}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-2xl{font-size:1.5rem;line-height:2rem}
  </style></head><body>${html}</body></html>`;
}

