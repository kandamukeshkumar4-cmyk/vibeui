"use client";

import Link from "next/link";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();

  async function signup() {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${location.origin}/auth/callback` } });
      if (error) toast.error(error.message);
      else toast.success("Check your email to confirm your account.");
    } finally {
      setIsLoading(false);
    }
  }

  async function google() {
    await supabase.auth.signInWithOAuth({ provider: "google", options: { redirectTo: `${location.origin}/auth/callback` } });
  }

  return (
    <main className="grid min-h-screen place-items-center px-4">
      <section className="w-full max-w-sm rounded-lg bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Create account</h1>
        <form
          className="mt-6 space-y-3"
          onSubmit={(e) => { e.preventDefault(); signup(); }}
        >
          <Input placeholder="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          <Input placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required minLength={6} />
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Sign up
          </Button>
          <Button type="button" onClick={google} className="w-full border border-slate-200 bg-white text-slate-900 hover:bg-slate-50">Continue with Google</Button>
        </form>
        <p className="mt-4 text-sm text-slate-500">Already have an account? <Link href="/login" className="font-semibold text-slate-900">Log in</Link></p>
      </section>
    </main>
  );
}

