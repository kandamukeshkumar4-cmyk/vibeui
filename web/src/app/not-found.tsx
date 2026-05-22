import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-4">
      <section className="text-center">
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <Link className="mt-4 inline-flex rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white" href="/">Go home</Link>
      </section>
    </main>
  );
}
