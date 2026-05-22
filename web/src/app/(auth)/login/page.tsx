"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const supabase = createClient();

  async function login() {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) toast.error(error.message);
    else router.push("/dashboard");
  }

  async function google() {
    await supabase.auth.signInWithOAuth({ provider: "google", options: { redirectTo: `${location.origin}/auth/callback` } });
  }

  return (
    <main className="grid min-h-screen place-items-center px-4">
      <section className="w-full max-w-sm rounded-lg bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Log in</h1>
        <div className="mt-6 space-y-3">
          <Input placeholder="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <Input placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          <Button onClick={login} className="w-full">Log in</Button>
          <Button onClick={google} className="w-full border border-slate-200 bg-white text-slate-900 hover:bg-slate-50">Continue with Google</Button>
        </div>
        <p className="mt-4 text-sm text-slate-500">No account? <Link href="/signup" className="font-semibold text-slate-900">Sign up</Link></p>
      </section>
    </main>
  );
}

