export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 text-sm text-slate-600 md:grid-cols-4">
        <div><strong className="text-slate-950">VibeUI</strong><p className="mt-2">AI-powered mobile design generation.</p></div>
        <div><strong>Product</strong><p className="mt-2">Demo<br />Dashboard<br />API</p></div>
        <div><strong>Company</strong><p className="mt-2">About<br />Careers<br />Contact</p></div>
        <div><strong>Legal</strong><p className="mt-2">Privacy<br />Terms<br />Security</p></div>
      </div>
    </footer>
  );
}

